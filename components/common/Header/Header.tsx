import { LeftArrowIcon } from '@/components/Icons'
import { useRouter } from 'next/router'
import { Container } from './Header.style'

interface HeaderProps {
  rightButton?: JSX.Element
  onClickRightButton?: () => void
  titleFontSize?: string
  title: string
}

const Header = ({ rightButton, onClickRightButton, title, titleFontSize = '24px' }: HeaderProps) => {
  const route = useRouter()

  return (
    <Container titleFontSize={titleFontSize}>
      <button onClick={() => route.back()}>
        <LeftArrowIcon />
      </button>
      <h1 className="header-title">{title}</h1>
      <button className="right-btn" onClick={onClickRightButton}>
        {rightButton && rightButton}
      </button>
    </Container>
  )
}

export default Header
