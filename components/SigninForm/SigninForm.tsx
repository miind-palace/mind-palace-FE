const sendForSigninFunction = async (body: {}) => {
  // 로그인 버튼에 들어가는 함수
  try {
    const res = await axiosAuthAPI.post("/auth/signin", body); // axiosAuthAPI.create 모듈화 해야함, 백엔드에서 API path 오면 경로 재지정 해야함
    return res;
  } catch (error) {
    console.log(error);
    alert("sendForSigninFunction Error : 로그인에 실패하였습니다!");
  }
};

export default function SigninForm() {
  return (
    <form>
      <label>
        Email
        <input type="text" name="email" />
      </label>

      <label>
        Password
        <input type="password" name="password" />
      </label>

      <button>Log in</button>

      <a href="#">Make an account</a>
    </form>
  );
}
