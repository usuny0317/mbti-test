import { useNavigate } from "react-router-dom";
import { getUserProfile, login } from "../api/auth";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const user = {
      id: id,
      password: password,
    };

    try {
      const result = await login(user);
      if (result.success) {
        alert("로그인 되었습니다.");
        localStorage.setItem("accessToken", result.accessToken);

        try {
          const userdata = await getUserProfile(result.accessToken);
          localStorage.setItem("id", userdata.id);
          localStorage.setItem("nickname", userdata.nickname);
        } catch (err) {
          alert("유저 정보 가져오기 실패!" + err);
        }
        navigate("/");
      } else throw "실패!";
    } catch (err) {
      alert("로그인 실패!" + err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
      <div className="flex  flex-col items-center justify-center min-h-screen bg-blue-100 text-black ">
        <h1 className="text-3xl font-bold mb-6">로그인</h1>
        <form
          onSubmit={handleForm}
          className="bg-white p-6 rounded-lg shadow-lg w-80"
        >
          <label className="block mb-4">
            <span className="text-gray-700">아이디:</span>
            <input
              placeholder="아이디"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">비밀번호:</span>
            <input
              placeholder="비밀번호"
              type="password"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-200 hover:bg-blue-400 text-white py-2 rounded transition duration-200"
          >
            로그인하기
          </button>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="w-full mt-3 bg-gray-200 hover:bg-gray-400 text-gray py-2 rounded transition duration-200"
          >
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
