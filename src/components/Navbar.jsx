import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  //로그아웃
  const handleLogout = () => {
    localStorage.clear();
    logout();
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
