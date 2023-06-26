import BounceCube from '@/components/Intro/BounceCube/BounceCube'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import SigninForm from './SigninForm/SigninForm'

const TRANSITION_DELAY = 3700

const TempPage = () => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true)
    }, TRANSITION_DELAY)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Temp>
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
    </Temp>
  )
}

export default TempPage

const Temp = styled.div``

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background: white;
`

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DimBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(176, 176, 176, 0.5) 10%,
    transparent 50%,
    rgba(176, 176, 176, 0.5) 90%,
    rgba(0, 0, 0, 0.3) 100%
  );
  transition: all 1s ease-in-out;
  opacity: ${(props: { isShow: boolean }) => (props.isShow ? 1 : 0)};
  visibility: ${(props: { isShow: boolean }) => (props.isShow ? 'none' : 'hidden')};
`

const InputBox = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  height: auto;
  min-height: 140px;
  margin: 0 auto;
  z-index: 1;
  border-radius: 5px;
  transition: all 1s ease-in-out;
  opacity: ${(props: { isShow: boolean }) => (props.isShow ? 1 : 0)};
  visibility: ${(props: { isShow: boolean }) => (props.isShow ? 'none' : 'hidden')};
`

const CubeBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
