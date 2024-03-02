import { LeftArrowIcon } from '@/components/Icons'
import { useRouter } from 'next/router'
import { Container } from './Header.style'

interface HeaderProps {
  hasRightButton?: JSX.Element
  onClickRightButton?: () => void
  titleFontSize?: string
  title: string
}

const Header = ({ hasRightButton, onClickRightButton, title, titleFontSize = '24px' }: HeaderProps) => {
  const route = useRouter()

  return (
    <Container titleFontSize={titleFontSize}>
      <button onClick={() => route.back()}>
        <LeftArrowIcon />
      </button>
      <p>{title}</p>
      <button onClick={onClickRightButton}>{hasRightButton && hasRightButton}</button>
    </Container>
  )
}

export default Header
