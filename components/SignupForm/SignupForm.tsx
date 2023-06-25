import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const sendForSignupFunction = async (body: {}) => {
  // 회원가입 버튼에 들어가는 함수
  try {
    //   const res = await axiosAPI.post("/auth/signup", body); // 백엔드에서 API path 오면 경로 지정 해야함
    //   return res;
  } catch (error) {
    console.log(error)
    alert('sendForSignupFunction Error : 회원가입에 실패하였습니다!')
  }
}

export default function SignupForm() {
  useEffect(() => {
    // 마운트시 토큰 있으면 upload 페이지로 !! ( 사용자가 url 에 직접 sign-up 로 접근하였을 경우 대비 )
    if (localStorage.getItem('token')) {
      router.push('/upload')
    }
  }, [])

  const [signupConditions, setSignupConditions] = useState({ email: '', password: '', passwordCheck: '' })
  const router = useRouter()

  const [emailValidity, setEmailValidity] = useState(false)
  const [passwordValidity, setPasswordValidity] = useState(false)
  const [passwordCheckValidity, setPasswordCheckValidity] = useState(false)

  function validateEmailFunction(email: string) {
    // 이메일 형식인지 유효성 검증하는 함수
    // 이메일 유효성을 검사하는 정규식
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    console.log(email)
    return regex.test(email)
  }

  const updateSignupConditions = (e: ChangeEvent<HTMLInputElement>) => {
    // input 값에 onChange 를 통해 Conditions 을 변화시키는 함수
    const { value, name } = e.target

    setSignupConditions((prevConditions) => ({
      ...prevConditions,
      [name]: value, // 네임 가져와서 네임에 맞는 애로 변경
    }))

    if (name === 'email') {
      // 이메일과 유효성 검증
      if (validateEmailFunction(value)) {
        setEmailValidity(true)
      } else {
        setEmailValidity(false)
      }
    }

    if (name === 'password') {
      if (value.length >= 8 && value.length <= 16) {
        setPasswordValidity(true)
      } else {
        setPasswordValidity(false)
      }
    }

    if (name === 'passwordCheck') {
      if (value === signupConditions.password) {
        setPasswordCheckValidity(true)
      } else {
        setPasswordCheckValidity(false)
      }
    }
  }

  const validityResult = emailValidity && passwordValidity && passwordCheckValidity // 유효성검증이 모두 통과되었는지에 대한 결과값

  // console.log("emailValidity", emailValidity);
  // console.log("passwordValidity", passwordValidity);
  // console.log("passwordCheckValidity", passwordCheckValidity);
  // console.log("validityResult", validityResult);

  const signupFunction = async (e: FormEvent) => {
    // 회원가입 시켜주는 함수 그 후 upload 페이지 이동
    e.preventDefault()

    if (validityResult) {
      // 이메일, 패스워드, 패스워드 일치여부 유효성검증이 모두 통과되었는지에 대한 결과값

      if (true) {
        // 이메일 중복 없음

        const res = await sendForSignupFunction(signupConditions)

        // if (res.status === 201) {
        //   router.push('/upload')
        // }
      } else {
        alert('작성하신 Email 을 사용하실 수 없습니다.')
      }
    } else {
      alert('이메일과 비밀번호가 올바르게 작성되었는지 확인해주세요.')
    }
  }

  console.log(signupConditions)

  return (
    <>
      <form onSubmit={signupFunction}>
        <label>
          Email
          <input id="Email" value={signupConditions.email} type="text" name="email" onChange={updateSignupConditions} />
        </label>

        <label>
          Password
          <input
            id="Password"
            value={signupConditions.password}
            type="password"
            name="password"
            onChange={updateSignupConditions}
          />
        </label>

        <label>
          Confirm Password
          <input
            id="PasswordCheck"
            value={signupConditions.passwordCheck}
            type="password"
            name="passwordCheck"
            onChange={updateSignupConditions}
          />
        </label>

        <button>Sign in</button>
      </form>
    </>
  )
}
