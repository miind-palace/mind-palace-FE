import styled from '@emotion/styled'
import Input from './Input'
import { SecurityIcon } from '@/components/Icons'

const SigninForm = () => {
  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert('submit')
        }}
      >
        <InputBox>
          <Input inputLabel="Email" type="text" name="email" onChange={() => {}} />
        </InputBox>
        <InputBox>
          <Input
            inputLabel="Password"
            type="password"
            name="password"
            onChange={() => {}}
            svgIcon={<SecurityIcon width="16" height="17" />}
          />
        </InputBox>

        <ButtonBox>
          <StyledButton>Log in</StyledButton>

          <StyledLink href="#" onClick={() => {}}>
            Make an account
          </StyledLink>
        </ButtonBox>
      </form>
    </Wrapper>
  )
}

export default SigninForm

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
