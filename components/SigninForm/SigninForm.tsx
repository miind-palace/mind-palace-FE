import { useState, FormEvent, ChangeEvent, MouseEvent, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styled from '@emotion/styled'
import { SecurityIcon } from '../Icons'
import Input from '@/components/common/Input/Input'
import Link from 'next/link'
import BasicButton from '../common/Button/BasicButton'
import Spacing from '../common/Spacing/Spacing'

export default function SigninForm() {
  useEffect(() => {
    // 마운트 시 토큰 존재하면 업로드 페이지 이동 -> ( api 받으면 추후 세션 방식으로 바꿔야 한다 ) - 자동 로그인 되어있을 경우 업로드로 라우팅도 구현해야
    if (localStorage.getItem('memberId')) {
      router.push('/upload')
    }
  }, [])

  const [signinConditions, setSigninConditions] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()

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

    if (!signinConditions.email || !signinConditions.password) return alert('아이디나 비밀번호를 입력하세요!')

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DEFAULT_END_POINT}member/login`, {
        memberEmail: signinConditions.email,
        memberPassword: signinConditions.password,
      })

      if (response.data === '로그인 실패') return alert(response.data)

      localStorage.setItem('memberId', response.data.id)
      router.push('/upload')
    } catch (error) {
      alert('아이디나 비밀번호를 확인하세요!')
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
