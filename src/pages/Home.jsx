import { useNavigate } from "react-router-dom";

const HOME = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center pt-20">
      <h1 className="text-4xl font-bold text-black mb-4">
        !무료 MBTI 성격 테스트!
      </h1>
      <h4 className="text-lg text-gray-700 mb-8">
        테스트를 통해 결과를 확인해보세요!
      </h4>

      <div className="space-y-4">
        <button
          className="w-64 py-3 bg-blue-300 text-black font-semibold rounded-xl hover:bg-blue-400 transition"
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
          className="w-64 py-3 bg-blue-300 text-black font-semibold rounded-xl hover:bg-blue-400 transition"
          onClick={() => {
            const isAuthenticated = localStorage.getItem("accessToken");
            if (!isAuthenticated) {
              alert("로그인이 필요합니다.");
            }
            navigate("/results");
          }}
        >
          결과 모아 보기
        </button>
      </div>
    </div>
  );
};

export default HOME;
