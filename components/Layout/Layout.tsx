import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  const tempLogout = () => {
    localStorage.removeItem('memberId')
    router.push('/sign-in')
    alert('로그아웃 되었습니다.')
  }

  return (
    <LayoutContainer>
      <TempLogoutButton onClick={tempLogout}>로그아웃(임시)</TempLogoutButton>
      {children}
    </LayoutContainer>
  )
}

export default Layout

const TempLogoutButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
`

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  background: white;
`
