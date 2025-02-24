import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/calculateMBTI";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    const userid = localStorage.getItem("id");
    const nickname = localStorage.getItem("nickname");
    setResult(mbtiResult);

    // 결과 서버에 저장해야함.
    try {
      const response = createTestResult({
        nickname: nickname,
        mbti: mbtiResult,
        desc: mbtiDescriptions[mbtiResult],
        visibility: true,
        userid: userid,
      });
      if (!response) {
        throw "테스트 값에 오류가 있습니다!";
      } else {
        ("저장 됐습니다!");
      }
    } catch (err) {
      alert("테스트 오류!" + err);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white pt-20">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-blue-100 text-blue-800 py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-blue-400 transition"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
