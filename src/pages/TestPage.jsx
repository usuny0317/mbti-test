import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>테스트 페이지 입니다.</h1>
      <button
        onClick={() => {
          navigate("/result");
        }}
      >
        결과보기
      </button>
    </>
  );
};

export default TestPage;
