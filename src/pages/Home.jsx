import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const HOME = () => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = async () => {
      try {
        const data = await axios("https://www.nbcamp-react-auth.link");
        setPost(data);
      } catch (err) {
        console.log("err=>", err);
      }
    };
  });
  const navigate = useNavigate();
  return (
    <div>
      <h1>!무료 MBTI 성격 테스트!</h1>
      <h4>테스트를 통해 결과를 확인해보세요! </h4>
      <button
        onClick={() => {
          navigate("/test");
        }}
      >
        테스트하기
      </button>

      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인하기
      </button>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        마이페이지 이동하기
      </button>
    </div>
  );
};

export default HOME;
