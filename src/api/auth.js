import { axiosInstance } from "./axiosInstance";

//회원가입
export const register = async (userData) => {
  const response = await axiosInstance.post(`/register`, userData);
  return response.data;
};

//로그인
export const login = async (userData) => {
  const response = await axiosInstance.post(`/login`, userData);
  return response.data;
};

// 유저 정보 받기
export const getUserProfile = async (token) => {
  if (!token) {
    throw new Error("인증 토큰이 없습니다!");
  }
  try {
    const response = await axiosInstance.get(`/user`);
    return response.data;
  } catch (err) {
    alert("유저 정보를 받아오지 못했습니다!" + err);
  }
};

//유저 정보 수정하기
export const updateProfile = async (formData) => {
  //헤더 만들기 혹시 모를 이미지 위해
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const response = await axiosInstance.patch(`/profile`, formData, {
    headers,
  });
  return response.data;
};
