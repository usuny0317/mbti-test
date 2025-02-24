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
    <nav className="fixed top-0 left-0 w-full bg-blue-200 text-black shadow-md p-4 flex justify-between items-center ">
      <Link to="/" className="text-xl font-bold hover:text-blue-300">
        메인으로가기
      </Link>
      <div className="flex space-x-4">
        <Link
          to="/results"
          onClick={() => {
            if (!isAuthenticated) {
              alert("로그인이 필요합니다.");
            }
          }}
          className="hover:text-blue-300"
        >
          결과 리스트
        </Link>
        <Link
          to="/profile"
          onClick={() => {
            if (!isAuthenticated) {
              alert("로그인이 필요합니다.");
            }
          }}
          className="hover:text-blue-300"
        >
          프로필가기
        </Link>
      </div>
      <div>
        {!isAuthenticated ? (
          <Link to="/login" className="hover:text-blue-300">
            로그인
          </Link>
        ) : (
          <Link to="/" onClick={handleLogout} className="hover:text-blue-300">
            로그아웃
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
