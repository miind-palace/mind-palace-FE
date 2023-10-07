import { useState, useEffect, FormEvent, ChangeEvent, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styled from '@emotion/styled'
import Input from '@/components/common/Input/Input'
import { SecurityIcon } from '../Icons'
import BasicButton from '../common/Button/BasicButton'
import Spacing from '../common/Spacing/Spacing'
import { validateEmail } from '@/lib/utils/validateEmail'
import { axiosHttp } from '@/lib/utils/httpCore'

type SignUpValueType = {
  email: string
  name: string
  password: string
  passwordCheck: string
}

const initialSignUpValue: SignUpValueType = {
  email: '',
  name: '',
  password: '',
  passwordCheck: '',
}

const SIGN_UP_KEY = Object.keys(initialSignUpValue)

export default function SignupForm() {
  const router = useRouter()
  const [signUpValue, setSignUpValue] = useState<SignUpValueType>(initialSignUpValue)
  const [isValidEmailCheck, setIsValidEmailCheck] = useState<boolean>(false)

  useEffect(() => {
    // 마운트시 memberId 있으면 upload 페이지로 라우팅
    // if (localStorage.getItem('memberId')) {
    //   router.push('/upload')
    // }
  }, [router])

  const handleChangeSignUpValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newTargetValue = e.target.value
    const targetId = e.target.id

    // targetId가 initialSignUpValue의 key값애 존재하지 않을 경우 return
    if (!SIGN_UP_KEY.includes(targetId)) return

    setSignUpValue((prev) => {
      return {
        ...prev,
        [targetId]: newTargetValue,
      }
    })
  }

  const handleSubmitSignUp = async (e: FormEvent) => {
    // 회원가입 시켜주는 함수 그 후 upload 페이지 이동
    e.preventDefault()
    console.log('signUpValue: ', signUpValue)

    const isValidEmail = validateEmail(signUpValue.email)
    if (!isValidEmail) {
      alert('이메일 형식이 올바르지 않습니다.')
      return
    }

    const reqInput = {
      memberEmail: signUpValue.email,
      memberName: signUpValue.name,
      memberPassword: signUpValue.password,
    }

    try {
      const { data } = await axiosHttp.post('/member/save', reqInput)
      alert(data)
      router.push('/sign-in')
    } catch (err) {
      if (err instanceof Error) alert(err.message)
    }
  }

  const checkEmail = async (email: string) => {
    const { data } = await axiosHttp.post(`/member/mailCheck?memberEmail=${email}`)
    const isValidEmail = data === AVAILABLE_EMAIL_MSG
    const result = {
      check: isValidEmail,
      msg: data,
    }
    return result
  }

  const handleVerifyEmail = async () => {
    const email = signUpValue.email
    const { check, msg } = await checkEmail(email)
    if (!check) {
      alert(msg)
      return
    }

    try {
      const { data } = await axiosHttp.post(`/member/mailVerify`, { email })
      alert(data)
    } catch (err) {
      if (err instanceof Error) alert(err.message)
    }
  }

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmitSignUp} autoComplete="off">
          <Spacing size={20} />
          <Input
            inputLabel="Email"
            id="email"
            type="text"
            name="email"
            colorType="PENETRATED_WHITE"
            onChange={handleChangeSignUpValue}
          />
          <Spacing size={10} />
          <BasicButton onClick={handleVerifyEmail} type="button">
            이메일 인증
          </BasicButton>
          <Spacing size={20} />
          <Input
            inputLabel="Name"
            id="name"
            type="text"
            name="name"
            colorType="PENETRATED_WHITE"
            onChange={handleChangeSignUpValue}
          />
          <Spacing size={20} />
          <Input
            inputLabel="Password"
            type="password"
            name="password"
            id="password"
            svgIcon={<SecurityIcon width="16" height="17" fill="gray" />}
            colorType="PENETRATED_WHITE"
            onChange={handleChangeSignUpValue}
          />
          <Spacing size={20} />
          <Input
            inputLabel="Confirm Password"
            type="password"
            name="passwordCheck"
            id="passwordCheck"
            svgIcon={<SecurityIcon width="16" height="17" fill="gray" />}
            colorType="PENETRATED_WHITE"
            onChange={handleChangeSignUpValue}
          />
          <Spacing size={70} />
          <BasicButton type="submit" disabled={!isValidEmailCheck}>
            Sign up
          </BasicButton>
        </form>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const AVAILABLE_EMAIL_MSG = '사용가능한 이메일입니다!'
