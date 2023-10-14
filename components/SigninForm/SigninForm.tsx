import { useState, FormEvent, ChangeEvent, MouseEvent, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { SecurityIcon } from '../Icons'
import Input from '@/components/common/Input/Input'
import Link from 'next/link'
import BasicButton from '../common/Button/BasicButton'
import Spacing from '../common/Spacing/Spacing'
import { axiosHttp } from '@/lib/utils/httpCore'

export default function SigninForm() {
  const router = useRouter()

  useEffect(() => {
    // 마운트시 localStorage에 memberId 있으면 upload 페이지로 라우팅
    if (localStorage.getItem('memberId')) {
      router.push('/upload')
    }
  }, [router])

  const [signinConditions, setSigninConditions] = useState({
    email: '',
    password: '',
  })

  const updateSigninConditions = (e: ChangeEvent<HTMLInputElement>) => {
    // input 값에 onChange 를 통해 Conditions 을 변화시키는 함수
    const { value, name } = e.target
    setSigninConditions((prevConditions) => ({
      ...prevConditions,
      [name]: value, // 네임 가져와서 네임에 맞는 애로 변경
    }))
  }

  const signinFunction = async (e: FormEvent) => {
    // 로그인 버튼 클릭시 폼 제출 후 업로드 페이지로 라우팅
    e.preventDefault()

    debugger
    if (!signinConditions.email || !signinConditions.password) return alert('아이디 혹은 비밀번호를 입력하세요!')

    try {
      const response = await axiosHttp.post(`/member/login`, {
        memberEmail: signinConditions.email,
        memberPassword: signinConditions.password,
      })
      localStorage.setItem('memberId', response.data.id)
      router.push('/upload')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  const goToSignupPage = (e: MouseEvent<HTMLAnchorElement>) => {
    // Make an Account 클릭시 회원가입 페이지로 이동
    e.preventDefault()
    router.push('/sign-up')
  }

  return (
    <Wrapper>
      <form onSubmit={signinFunction}>
        <Spacing size={20} />
        <Input
          value={signinConditions.email}
          inputLabel="Email"
          type="text"
          name="email"
          onChange={updateSigninConditions}
          colorType="PENETRATED_BLACK"
        />
        <Spacing size={20} />
        <Input
          value={signinConditions.password}
          inputLabel="Password"
          type="password"
          name="password"
          onChange={updateSigninConditions}
          svgIcon={<SecurityIcon width="16" height="17" color="white" />}
          colorType="PENETRATED_BLACK"
        />
        <Spacing size={70} />
        <BasicButton>Log in</BasicButton>
        <Spacing size={20} />
        <StyledLink href="#" onClick={goToSignupPage}>
          Make an account
        </StyledLink>
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
