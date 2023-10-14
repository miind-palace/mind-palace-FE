import { useState, useEffect, FormEvent, ChangeEvent, MouseEvent, useMemo } from 'react'
import { useRouter } from 'next/router'
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

const defaultSignUpValue = {
  email: '',
  name: '',
  password: '',
  passwordCheck: '',
}

const initSignUpValue = (email: string) => {
  return {
    ...defaultSignUpValue,
    email,
  }
}

const SIGN_UP_KEY = Object.keys(defaultSignUpValue)

export default function SignupForm({ email }: { email: string }) {
  const router = useRouter()
  const initialSignUpValue = useMemo(() => initSignUpValue(email), [email])
  const [signUpValue, setSignUpValue] = useState<SignUpValueType>(initialSignUpValue)

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
    e.preventDefault()

    const isValidEmail = validateEmail(email)
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
            value={email}
            readOnly
          />
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
          <BasicButton type="submit">Sign up</BasicButton>
        </form>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
