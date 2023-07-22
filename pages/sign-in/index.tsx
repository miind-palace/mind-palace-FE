import { useEffect, useState } from 'react'
import SigninForm from '@/components/SigninForm/SigninForm'
import BounceCube from '@/components/Intro/BounceCube/BounceCube'
import { Container, CubeBox, DimBg, InputBox, Wrapper } from './index.style'

const SignInPage = () => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true)
    }, TRANSITION_DELAY)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Container>
      <Wrapper>
        <CubeBox>
          <BounceCube />
        </CubeBox>
        <DimBg isShow={isShow} />
        <InputBox isShow={isShow}>
          <SigninForm />
        </InputBox>
      </Wrapper>
    </Container>
  )
}

export default SignInPage

const TRANSITION_DELAY = 3700
