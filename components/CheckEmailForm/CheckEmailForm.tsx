import { ChangeEvent, FormEvent } from 'react'
import styled from '@emotion/styled'
import Input from '@/components/common/Input/Input'
import BasicButton from '../common/Button/BasicButton'
import Spacing from '../common/Spacing/Spacing'
import { axiosHttp } from '@/lib/utils/httpCore'
import { validateEmail } from '@/lib/utils/validateUserInfo'

interface CheckEmailFormProps {
  email: string
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  goNextStep: () => void
}

export default function CheckEmailForm({ email, onChangeEmail, goNextStep }: CheckEmailFormProps) {
  const checkValidateEmail = async (email: string) => {
    const { data } = await axiosHttp.post(`/member/mailCheck?memberEmail=${email}`)
    const result = {
      ...data,
    }
    return result
  }

  const handleValidateEmail = async (e: FormEvent) => {
    e.preventDefault()
    console.log('clicked!')

    // 이메일 형식 체크 로직
    const isValidEmail = validateEmail(email)
    if (!isValidEmail) {
      alert('이메일 형식이 올바르지 않습니다.')
      return
    }

    // 이메일 중복 검증 로직
    const { duplicated, message } = await checkValidateEmail(email)
    if (duplicated) {
      alert(message)
      return
    }

    alert('사용할 수 있는 이메일입니다.')
    goNextStep()
  }

  return (
    <Wrapper>
      <form onSubmit={handleValidateEmail} autoComplete="off">
        <Spacing size={20} />
        <Input
          inputLabel="Email"
          id="email"
          type="text"
          name="email"
          colorType="PENETRATED_WHITE"
          onChange={onChangeEmail}
        />
        <Spacing size={10} />
        <BasicButton type="submit">이메일 중복 확인</BasicButton>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const AVAILABLE_EMAIL_MSG = '사용가능한 이메일입니다!'
