import { InputHTMLAttributes, MouseEvent, Ref, forwardRef } from 'react'
import {
  HelperAndErrorText,
  KeywordInputContainer,
  SearchButton,
  SearchInput,
  SearchInputWrapper,
  SvgSearchIcon,
} from './KeywordInput.style'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean

  onClickButton: (e: MouseEvent<HTMLButtonElement>) => void
}

const KeywordInput = ({ hasError, onClickButton, ...props }: SearchInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <KeywordInputContainer>
      <HelperAndErrorText hasError={hasError}>
        {hasError ? '올바른 키워드를 입력하세요' : 'ex) 강원도 앞 바다, 겨울의 야경'}
      </HelperAndErrorText>
      <SearchInputWrapper>
        <SvgSearchIcon />
        <SearchInput type="text" ref={ref} {...props} />
        <SearchButton type="button" onClick={onClickButton} disabled={!props.value}>
          찾아보기
        </SearchButton>
      </SearchInputWrapper>
    </KeywordInputContainer>
  )
}

export default forwardRef(KeywordInput)
