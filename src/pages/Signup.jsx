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
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSignup}>
        <label>
          아이디:
          <input
            placeholder="아이디를 입력해주세요"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </label>
        <label>
          비밀번호:
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label>
          닉네임:
          <input
            placeholder="닉네임을 입력해주세요"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </label>
        <button type="submit">회원가입하기</button>
      </form>
    </>
  );
};

export default Signup;
