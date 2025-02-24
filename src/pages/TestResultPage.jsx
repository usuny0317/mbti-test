import { useNavigate } from "react-router-dom";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import { useEffect, useState } from "react";

const TestResultPage = () => {
  const navigate = useNavigate();
  const [testResults, setTestResults] = useState([]);
  const userid = localStorage.getItem("id");

  //데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTestResults();
        setTestResults(data);
      } catch (err) {
        alert("데이터를 불러오지 못했습니다!!:" + err);
      }
    };
    fetchData();
  }, []);

  //삭제 핸들러
  const handledelete = async (id) => {
    try {
      const response = await deleteTestResult(id);
      if (!response) throw "응답이 없습니다!";
      alert("삭제 되었습니다!");
      setTestResults(testResults.filter((result) => result.id !== id));
    } catch (err) {
      alert("삭제에 실패했습니다!!" + err);
    }
  };

  //숨기기/ 보이기 핸들러
  const handlevisibility = async (id, visibility) => {
    try {
      const response = await updateTestResultVisibility(id, visibility);
      if (!response) throw "응답이 없습니다!";
      alert("변경 되었습니다!");
      setTestResults(
        testResults.map((result) =>
          result.id === id ? { ...result, visibility: !visibility } : result
        )
      );
    } catch (err) {
      alert("공개 여부 변경 실패!!: " + err);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center pt-20">
      <h1 className="text-4xl font-bold text-black mb-8">테스트 결과</h1>
      <div className="w-full max-w-2xl space-y-6">
        {testResults.map((da) =>
          userid === da.userid ? (
            <div
              key={da.id}
              className="p-4 bg-white shadow-lg rounded-xl border border-gray-200"
            >
              <div className="text-xl font-semibold text-blue-600 mb-2">
                {da.mbti}
              </div>
              <div className="text-gray-700 mb-4">{da.desc}</div>
              <div className="flex space-x-4">
                <button
                  className="py-2 px-4 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400 transition"
                  onClick={() => handlevisibility(da.id, da.visibility)}
                >
                  {da.visibility ? "숨기기" : "보이기"}
                </button>
                <button
                  className="py-2 px-4 bg-purple-300 text-black rounded-lg hover:bg-purple-400 transition"
                  onClick={() => handledelete(da.id)}
                >
                  삭제하기
                </button>
              </div>
            </div>
          ) : da.visibility ? (
            <div
              key={da.id}
              className="p-4 bg-white shadow-lg rounded-xl border border-gray-200"
            >
              <div className="text-xl font-semibold text-blue-600 mb-2">
                {da.mbti}
              </div>
              <div className="text-gray-700 mb-4">{da.desc}</div>
            </div>
          ) : null
        )}
      </div>
      <button
        className="mt-8 py-3 px-6 bg-blue-300 text-black font-semibold rounded-xl hover:bg-blue-400 transition"
        onClick={() => navigate("/")}
      >
        메인으로 돌아가기
      </button>
    </div>
  );
};

export default TestResultPage;
