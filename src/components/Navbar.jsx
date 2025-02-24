import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken")
  );

  useEffect(() => {
    // localStorage 값이 변경될 때마다 상태 업데이트
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false); // 상태 업데이트
  };
  return (
    <nav>
      {!isAuthenticated ? (
        <Link to="/login">로그인하기</Link>
      ) : (
        <span
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃하기
        </span>
      )}

      <Link to="/">메인으로가기</Link>
      <Link
        to="/profile"
        onClick={() => {
          if (!isAuthenticated) {
            alert("로그인이 필요합니다.");
          }
        }}
      >
        프로필가기
      </Link>
    </nav>
  );
};

export default Navbar;
