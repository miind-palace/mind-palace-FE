import { useState, FormEvent, ChangeEvent, MouseEvent, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { SecurityIcon } from '../Icons'
import Input from '@/components/common/Input/Input'
import Link from 'next/link'
import BasicButton from '../common/Button/BasicButton'
import Spacing from '../common/Spacing/Spacing'
import { axiosHttp } from '@/lib/utils/httpCore'

const initialSignInValue = {
  email: '',
  password: '',
}

export default function SigninForm() {
  const router = useRouter()

  useEffect(() => {
    // 마운트시 localStorage에 memberId 있으면 upload 페이지로 라우팅
    if (localStorage.getItem('memberId')) {
      router.push('/upload')
    }
  }, [router])

  const [signInValue, setSignInValue] = useState(initialSignInValue)

  const handleChangeSigninValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setSignInValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    if (!signInValue.email || !signInValue.password) return alert('아이디 혹은 비밀번호를 입력하세요!')

    try {
      const response = await axiosHttp.post(`/member/login`, {
        memberEmail: signInValue.email,
        memberPassword: signInValue.password,
      })
      localStorage.setItem('memberId', response.data.id)
      router.push('/upload')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSignIn}>
        <Spacing size={20} />
        <Input
          value={signInValue.email}
          inputLabel="Email"
          type="text"
          name="email"
          onChange={handleChangeSigninValue}
          colorType="PENETRATED_BLACK"
        />
        <Spacing size={20} />
        <Input
          value={signInValue.password}
          inputLabel="Password"
          type="password"
          name="password"
          onChange={handleChangeSigninValue}
          svgIcon={<SecurityIcon width="16" height="17" color="white" />}
          colorType="PENETRATED_BLACK"
        />
        <Spacing size={70} />
        <BasicButton>Log in</BasicButton>
        <Spacing size={20} />
        <StyledLink href="/sign-up">Make an account</StyledLink>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const StyledLink = styled(Link)`
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  color: #777777;
  font-weight: 600;
`
