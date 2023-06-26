import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <TempBody>
      <LayoutContainer>{children}</LayoutContainer>
    </TempBody>
  )
}

export default Layout

const TempBody = styled.div`
  // 작업 편의성을 위하여 임시로 부여한 스타일.
  // 데모데이 직전에 본 부분 제거 예정입니다.
  background: #f4f4f4;
`

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  background: white;
`
