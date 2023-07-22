import SignupForm from '../../components/SignupForm/SignupForm'
import BounceCube from '@/components/Intro/BounceCube/BounceCube'
import { Container, CubeBox, DimBg, InputBox, Wrapper } from './index.style'

const SignUpPage = () => {
  return (
    <Container>
      <Wrapper>
        <CubeBox>
          <BounceCube />
        </CubeBox>
        <DimBg isShow={true} />
        <InputBox isShow={true}>
          <SignupForm />
        </InputBox>
      </Wrapper>
    </Container>
  )
}

export default SignUpPage
