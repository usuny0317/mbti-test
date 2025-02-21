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
    <div>
      <h1>프로필 페이지</h1>

      <label>
        바꿀 닉네임을 입력해주세요!
        <input
          placeholder="닉네임 입력"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </label>
      <button
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
