import { useNavigate } from "react-router-dom";

const TestResultPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      TestResultPage
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
