import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";
//json 서버 baseURL: "http:localhost:5000"

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

//유저 정보 받기
export const getUserProfile = async (token) => {};

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
