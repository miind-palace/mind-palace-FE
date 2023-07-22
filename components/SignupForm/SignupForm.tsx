import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styled from '@emotion/styled'
import Input from '@/components/common/Input/Input'
import { SecurityIcon } from '../Icons'
import BasicButton from '../common/Button/BasicButton'
import Spacing from '../common/Spacing/Spacing'

const initialFormState = {
  email: '',
  password: '',
  passwordCheck: '',
  memberName: '',
}

export default function SignupForm() {
  useEffect(() => {
    // 마운트시 토큰 있으면 upload 페이지로 !! ( 사용자가 url 에 직접 sign-up 로 접근하였을 경우 대비 )
    if (localStorage.getItem('token')) {
      router.push('/upload')
    }
  }, [])

  const [signupConditions, setSignupConditions] = useState(initialFormState)
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

    alert('회원 가입 기능은 준비중입니다. 테스트 계정을 제공받아 로그인 해주세요!')
    return

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
      <Wrapper>
        <form onSubmit={signupFunction}>
          <Spacing size={20} />
          <Input
            value={signupConditions.email}
            inputLabel="Email"
            id="Email"
            type="text"
            name="email"
            onChange={updateSignupConditions}
            colorType="PENETRATED_WHITE"
          />
          <Spacing size={20} />
          <Input
            value={signupConditions.password}
            inputLabel="Password"
            type="password"
            name="password"
            id="password"
            onChange={updateSignupConditions}
            svgIcon={<SecurityIcon width="16" height="17" fill="gray" />}
            colorType="PENETRATED_WHITE"
          />
          <Spacing size={20} />
          <Input
            value={signupConditions.passwordCheck}
            inputLabel="Confirm Password"
            type="password"
            name="passwordCheck"
            id="PasswordCheck"
            onChange={updateSignupConditions}
            svgIcon={<SecurityIcon width="16" height="17" fill="gray" />}
            colorType="PENETRATED_WHITE"
          />
          <Spacing size={70} />
          <BasicButton>Sign up</BasicButton>
        </form>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
