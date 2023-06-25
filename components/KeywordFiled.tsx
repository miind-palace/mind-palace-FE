import styled from '@emotion/styled'
import Image from 'next/image'
import { ChangeEvent, FormEvent } from 'react'
import SearchIcon from '/public/images/search-icon.svg'

interface KeywordFiledProps {
  keywordValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

const KeywordFiled = ({ keywordValue, onChange, onSubmit }: KeywordFiledProps) => {
  return (
    <Container>
      <Image src={SearchIcon} alt="돋보기 아이콘" />
      <input type="text" value={keywordValue} onChange={onChange} maxLength={12} placeholder="Keyword" />
      <button type="button" onClick={onSubmit}>
        Send
      </button>
    </Container>
  )
}

export default KeywordFiled

const Container = styled.div`
  max-width: 600px; // 레이아웃 적용되면 이거는 제거해주세요~~
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid #000;
  align-items: center;
  padding: 5px 14px 5px 10px;

  input {
    height: 100%;
    border: none;
    padding: 0;
    flex: 1;
    &:focus {
      outline: none;
    }
  }

  img {
    margin-right: 6px;
  }

  button {
    background-color: transparent;
    border: none;
    color: #868686;
  }
`
