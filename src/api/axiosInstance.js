import axios from "axios";

//기본 url과 헤더 설정..
//아래 코드를 auth.js에서 계속 사용할 것임.
export const axiosInstance = axios.create({
  baseURL: "https://www.nbcamp-react-auth.link",
  headers: {
    "Content-Type": "application/json", // 모든 요청에 JSON 형식 사용
  },
});

//요청하기
//토큰 등 값 보내줘야할 때 사용한다..
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 헤더에 토큰 추가하기기
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // 요청 에러 나타내기
  }
);
