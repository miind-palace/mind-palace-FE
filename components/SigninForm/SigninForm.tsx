import { useState, FormEvent, ChangeEvent, MouseEvent, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styled from '@emotion/styled'
import Input from './Input'
import { SecurityIcon } from '../Icons'

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
      const response = await axios.post('/member/login', {
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
        <InputBox>
          <Input
            value={signinConditions.email}
            inputLabel="Email"
            type="text"
            name="email"
            onChange={updateSigninConditions}
          />
        </InputBox>
        <InputBox>
          <Input
            value={signinConditions.password}
            inputLabel="Password"
            type="password"
            name="password"
            onChange={updateSigninConditions}
            svgIcon={<SecurityIcon width="16" height="17" />}
          />
        </InputBox>

        <ButtonBox>
          <StyledButton>Log in</StyledButton>
          <StyledLink href="#" onClick={goToSignupPage}>
            Make an account
          </StyledLink>
        </ButtonBox>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const InputBox = styled.div`
  margin: 20px 0;
`

const ButtonBox = styled.div`
  margin: 70px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledButton = styled.button`
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.75);
  width: 100%;
  color: white;
  font-weight: 600;
  font-size: 17px;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.9);
  }
  &:active {
    transition: all 0.2s ease-in-out;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.9);
  }
`

const StyledLink = styled.a`
  margin: 10px;
  padding: 10px;
  text-decoration: underline;
  color: #777777;
  font-weight: 600;
`
