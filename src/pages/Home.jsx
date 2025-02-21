import { useNavigate } from "react-router-dom";

const HOME = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>!무료 MBTI 성격 테스트!</h1>
      <h4>테스트를 통해 결과를 확인해보세요! </h4>
      <button
        onClick={() => {
          const isAuthenticated = localStorage.getItem("accessToken");
          if (!isAuthenticated) {
            alert("로그인이 필요합니다.");
          }
          navigate("/test");
        }}
      >
        테스트하기
      </button>

      <button
        onClick={() => {
          const isAuthenticated = localStorage.getItem("accessToken");
          if (isAuthenticated) {
            alert("로그인 되어있습니다.");
          } else {
            navigate("/login");
          }
        }}
      >
        로그인하기
      </button>
      <button
        onClick={() => {
          const isAuthenticated = localStorage.getItem("accessToken");
          if (!isAuthenticated) {
            alert("로그인이 필요합니다.");
          }
          navigate("/profile");
        }}
      >
        마이페이지 이동하기
      </button>
    </div>
  );
};

export default HOME;
