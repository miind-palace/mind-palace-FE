import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  margin: 0 12px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.primary.heavy};
  color: ${({ theme }) => theme.colors.background.white};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
`

export const ToastMessage = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
`
