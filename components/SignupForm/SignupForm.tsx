import React from 'react'
import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const sendForSignupFunction = async (body: {}) => {
  // 회원가입 버튼에 들어가는 함수
  try {
    const res = await axiosAPI.post('/auth/signup', body) // 백엔드에서 API path 오면 경로 지정 해야함
    return res
  } catch (error) {
    console.log(error)
    alert('sendForSignupFunction Error : 회원가입에 실패하였습니다!')
  }
}

const SignupForm = () => {
  useEffect(() => {
    // 마운트시 토큰 있으면 upload 페이지로 !! ( 사용자가 url 에 직접 sign-up 로 접근하였을 경우 대비 )
    if (localStorage.getItem('token')) {
      router.push('/upload')
    }
  }, [])

  const [signupConditions, setSignupConditions] = useState({ email: '', password: '', passwordCheck: '' })
  const router = useRouter()

  const updateSignupConditions = (e: ChangeEvent<HTMLInputElement>) => {
    // input 값에 onChange 를 통해 Conditions 을 변화시키는 함수
    const { value, name } = e.target

    setSignupConditions((prevConditions) => ({
      ...prevConditions,
      [name]: value, // 네임 가져와서 네임에 맞는 애로 변경
    }))
  }

  const signupFunction = async (e: FormEvent) => {
    // 회원가입 시켜주는 함수 그 후 upload 페이지 이동
    e.preventDefault()

    const res = await sendForSignupFunction(signupConditions)

    if (res.status === 201) {
      router.push('/upload')
    }
  }

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

export default SignupForm
