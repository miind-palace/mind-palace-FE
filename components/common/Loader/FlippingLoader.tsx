import { Container, LoadingText, Wrapper } from './FlippingLoader.style'

export interface FlippingLoaderProps {
  size?: number
  textColor?: string
  cubeColor?: string
  textSize?: number
}

const FlippingLoader = ({ size = 50, textColor, cubeColor, textSize }: FlippingLoaderProps) => {
  return (
    <Container size={size}>
      <Wrapper cubeColor={cubeColor} size={size}>
        <span className="box1" />
        <span className="box2" />
        <span className="box3" />
        <span className="box4" />
      </Wrapper>
      <LoadingText size={size} textColor={textColor} textSize={textSize}>
        Loading
      </LoadingText>
    </Container>
  )
}

export default FlippingLoader
