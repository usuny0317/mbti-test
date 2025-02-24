import { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = () => {
  const [nickname, setNickname] = useState();

  const handleNickChange = async () => {
    const newprofile = {
      nickname: nickname,
    };

    try {
      const result = await updateProfile(newprofile);
      if (result.success) {
        alert("수정되었습니다!");
      } else throw "실패!";
    } catch (err) {
      alert("수정 실패!" + err);
    }
    setNickname("");
  };
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center pt-20">
      <h1 className="text-4xl font-bold text-black mb-4">프로필 페이지</h1>

      <label className="text-lg text-gray-700 mb-4">
        바꿀 닉네임을 입력해주세요!
        <br />
        <input
          className="w-64 mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="닉네임 입력"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </label>
      <button
        className="w-64 py-3 mt-4 bg-blue-300 text-black font-semibold rounded-xl hover:bg-blue-400 transition"
        onClick={() => {
          handleNickChange();
        }}
      >
        닉네임 수정하기
      </button>
    </div>
  );
};

export default Profile;
