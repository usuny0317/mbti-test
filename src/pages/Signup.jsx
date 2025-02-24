import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      id: id,
      password: password,
      nickname: nickname,
    };
    try {
      const result = await register(user);

      if (result.success) {
        alert("회원가입 성공!");
        navigate("/login");
      } else throw "실패!";
    } catch (err) {
      console.log("회원가입 실패:" + err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-black ">
        <h1 className="text-3xl font-bold mb-6">회원가입</h1>
        <form
          onSubmit={handleSignup}
          className="bg-white p-6 rounded-lg shadow-lg w-80"
        >
          <label className="block mb-4">
            <span className="text-gray-700">아이디:</span>
            <input
              placeholder="아이디를 입력해주세요"
              onChange={(e) => {
                setId(e.target.value);
              }}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700"> 비밀번호:</span>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </label>
          <label className="block mb-4">
            닉네임:
            <input
              placeholder="닉네임을 입력해주세요"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-200 hover:bg-blue-400 text-white py-2 rounded transition duration-200"
          >
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
