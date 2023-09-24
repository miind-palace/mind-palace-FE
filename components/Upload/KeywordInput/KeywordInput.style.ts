import { SearchIcon } from '@/components/Icons'
import styled from '@emotion/styled'

export const KeywordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchInputWrapper = styled.label`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.normal};
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line.normal};
  overflow: hidden;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 100px 10px 46px;
  background-color: ${({ theme }) => theme.colors.background.normal};
  color: ${({ theme }) => theme.colors.text.medium};
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.alternative};
  }

  &:focus {
    outline: 0;
  }
`

export const HelperAndErrorText = styled.span<{ hasError: boolean }>`
  padding-left: 46px;
  font-size: ${({ theme }) => theme.typography.size.text15};
  color: ${({ theme, hasError }) => (hasError ? theme.colors.text.error : theme.colors.text.assitive)};
  margin-bottom: 4px;
`

export const SvgSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`

export const SearchButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary.normal};
  font-size: ${({ theme }) => theme.typography.size.text18};
  font-weight: ${({ theme }) => theme.typography.weight.semiBold};
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.primary.disable};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.primary.bright};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`
