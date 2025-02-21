const Profile = () => {
  const handleNickChange = () => {
    alert("수정되었습니다!");
  };
  return (
    <div>
      <h1>프로필 페이지</h1>
      <label>
        닉네임이예요!
        <button
          onClick={() => {
            handleNickChange();
          }}
        >
          닉네임 수정하기
        </button>
      </label>
    </div>
  );
};

export default Profile;
