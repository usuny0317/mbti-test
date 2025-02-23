import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";
//json 서버 baseURL: "http:localhost:4000"

//회원가입
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

//로그인
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

// 유저 정보 받기
export const getUserProfile = async (token) => {
  if (!token) {
    console.error("❌ 토큰이 없음!");
    throw new Error("인증 토큰이 없습니다!");
  }

  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("유저 정보 불러오기 실패1:", error);
    throw error;
  }
};

//유저 정보 수정하기
export const updateProfile = async (formData) => {
  //헤더 만들기
  const token = localStorage.getItem("accessToken");
  const headers = {
    //"Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers,
  });
  return response.data;
};
