import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function SignupForm() {
  useEffect(() => {
    // 마운트시 토큰 있으면 upload 페이지로 !! ( 사용자가 url 에 직접 sign-up 로 접근하였을 경우 대비 )
    if (localStorage.getItem('token')) {
      router.push('/upload')
    }
  }, [])

  const [signupConditions, setSignupConditions] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    memberName: '',
  })
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
      const response = await axios.post('/member/save', {
        memberEmail: signupConditions.email,
        memberPassword: signupConditions.password,
        memberName: signupConditions.memberName,
      })

      if (response.status === 500) {
        alert('다른 이메일을 입력해 주세요!')
      }

      const loginResult = await axios.post('/member/login', {
        memberEmail: signupConditions.email,
        memberPassword: signupConditions.password,
      })

      localStorage.setItem('memberId', loginResult.data.id)
      router.push('/upload')
    } else {
      alert('이메일과 비밀번호가 올바르게 작성되었는지 확인해주세요.')
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

        <button>Sign up</button>
      </form>
    </>
  )
}
