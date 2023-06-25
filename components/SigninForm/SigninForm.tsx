import { useState, FormEvent, ChangeEvent, MouseEvent, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const sendForSigninFunction = async (body: {}) => {
  // 로그인 버튼에 들어가는 함수
  try {
    const res = await axiosAuthAPI.post("/auth/signin", body); // 백엔드에서 API path 오면 axiosAuthAPI.create 모듈화 해야함 및 경로 재지정 필요 !!
    return res;
  } catch (error) {
    console.log(error);
    alert("sendForSigninFunction Error : 로그인에 실패하였습니다!");
  }
};

export default function SigninForm() {
  useEffect(() => {
    // 마운트시 토큰 존재하면 업로드 페이지 이동 -> ( api 받으면 추후 세션 방식으로 바꿔야 한다 ) - 자동 로그인 되어있을 경우 업로드로 라우팅도 구현해야
    if (localStorage.getItem("token")) {
      router.push("/upload");
    }
  }, []);

  const [signinConditions, setSigninConditions] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const updateSigninConditions = (e: ChangeEvent<HTMLInputElement>) => {
    // input 값에 onChange 를 통해 Conditions 을 변화시키는 함수
    const { value, name } = e.target;
    setSigninConditions((prevConditions) => ({
      ...prevConditions,
      [name]: value, // 네임 가져와서 네임에 맞는 애로 변경
    }));
  };

  const signinFunction = async (e: FormEvent) => {
    // 로그인 버튼 클릭시 폼 제출 후 업로드 페이지로 라우팅
    e.preventDefault();

    const res: any = await sendForSigninFunction(signinConditions); // any
    if (res.status === 200) {
      localStorage.setItem("accessToken", res.data.access_token); // 로컬스토리지 저장 -> ( api 받으면 추후 세션 방식으로 바꿔야 한다 )
      router.push("/upload"); // 로그인 성공시 업로드 페이지 이동
    }
  };

  // console.log(signinConditions);

  const goToSignupPage = (e: MouseEvent<HTMLAnchorElement>) => {
    // Make an Account 클릭시 회원가입 페이지로 이동
    e.preventDefault();

    router.push("/sign-up");
  };

  return (
    <form onSubmit={signinFunction}>
      <label>
        Email
        <input
          value={signinConditions.email}
          type="text"
          name="email"
          onChange={updateSigninConditions}
        />
      </label>

      <label>
        Password
        <input
          value={signinConditions.password}
          type="password"
          name="password"
          onChange={updateSigninConditions}
        />
      </label>

      <button>Log in</button>

      <a href="#" onClick={goToSignupPage}>
        Make an account
      </a>
    </form>
  );
}
