import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
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
      //로그인 성공했을 때때
      if (result.success) {
        alert("로그인 되었습니다.");
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/");
      } else throw "실패!";
    } catch (err) {
      alert("로그인실패!" + err);
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleForm}>
        <label>
          아이디:
          <input
            placeholder="아이디"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </label>
        <label>
          비밀번호:
          <input
            placeholder="비밀번호"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit">로그인하기</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하기
        </button>
      </form>
    </>
  );
};

export default Login;
