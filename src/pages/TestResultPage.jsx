import { useLocation, useNavigate } from "react-router-dom";

const TestResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state;
  console.log(result);
  return (
    <div>
      <div>{result.mbti}</div>
      <div>{result.desc}</div>
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
