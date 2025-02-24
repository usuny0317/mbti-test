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

  //로그인된 값 가져오기기

  //데이터 가져오기기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTestResults();
        setTestResults(data); // 상태 업데이트
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  //삭제 핸들러
  const handledelete = async (id) => {
    try {
      const response = await deleteTestResult(id);
      if (!response) {
        throw "응답이 없습니다!";
      } else {
        alert("삭제 되었습니다!");
      }
    } catch (err) {
      alert("삭제에 실패했습니다!!" + err);
    }
  };
  //공개 여부 핸들러
  const handlevisibility = async (id, visibility) => {
    try {
      const response = await updateTestResultVisibility(id, visibility);
      if (!response) {
        throw "응답이 없습니다!";
      } else {
        alert("변경 되었습니다!");
      }
    } catch (err) {
      alert("공개 여부 변경 실패!!: " + err);
    }
  };

  return (
    <div>
      <div>
        {testResults.map(
          //id 같은 애들 보이기
          (da) =>
            userid === da.userid ? (
              <div key={da.id}>
                <div>{da.mbti}</div>
                <div>{da.desc}</div>
                <button
                  onClick={() => {
                    handlevisibility(da.id, da.visibility);
                  }}
                >
                  숨기기
                </button>
                <button
                  onClick={() => {
                    handledelete(da.id);
                  }}
                >
                  삭제하기
                </button>
              </div>
            ) : da.visibility ? (
              // 아이디 다른 애들인데.. 이중에 visibility false인 애들
              // 보이면 안된다..
              <div key={da.id}>
                <div>{da.mbti}</div>
                <div>{da.desc}</div>
              </div>
            ) : (
              <> </>
            )

          //id 랑 토큰을 가져온 id랑 같으면 삭제/ 비공개 버튼 나타내기
        )}
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        메인으로 돌아가기
      </button>
    </div>
  );
};

export default TestResultPage;
