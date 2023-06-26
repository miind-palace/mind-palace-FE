import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const CubeLoader = () => {
  return (
    <Container className="container">
      <div className="cube">
        <div className="wraaper-half-1">
          <div className="box-fragment box-fragment-1"></div>
          <div className="box-fragment box-fragment-2"></div>
          <div className="box-fragment box-fragment-5"></div>
        </div>
        <div className="wraaper-half-2">
          <div className="box-fragment box-fragment-3"></div>
          <div className="box-fragment box-fragment-4"></div>
          <div className="box-fragment box-fragment-6"></div>
        </div>
      </div>
    </Container>
  )
}

export default CubeLoader

const fragmentAni1 = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  10% {
    transform: rotateX(-90deg);
  }
  65% {
    transform: rotateX(-90deg);
  }
  75% {
    transform: rotateY(0deg);
  }
`

const fragmentAni5 = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  10% {
    transform: rotateY(90deg);
  }
  65% {
    transform: rotateY(90deg);
  }
  75% {
    transform: rotateY(0deg);
  }
`

const fragmentAni4 = keyframes`
  10% {
    transform: rotateX(0deg);
  }
  20% {
    transform: rotateX(90deg);
  }
  75% {
    transform: rotateX(90deg);
  }
  85% {
    transform: rotateX(0deg);
  }
`

const fragmentAni6 = keyframes`
  10% {
    transform: rotateX(0deg);
  }
  20% {
    transform: rotateY(-90deg);
  }
  75% {
    transform: rotateY(-90deg);
  }
  85% {
    transform: rotateY(0deg);
  }
`

const cubeAnimation = keyframes`
  30% {
    transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
  }
  35% {
    transform: rotateX(60deg) rotate(45deg) rotateZ(180deg);
  }
  40% {
    transform: rotateX(60deg) rotate(45deg) rotateZ(180deg);
  }
  45% {
    transform: rotateX(60deg) rotate(45deg) rotateZ(360deg);
  }
  55% {
    transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
  }
`

const halfFoldAnimation = keyframes`
  20% {
    transform: rotateX(0deg);
  }
  30% {
    transform: rotateX(-90deg);
  }
  55% {
    transform: rotateX(-90deg);
  }
  65% {
    transform: rotateX(0deg);
  }

`

const Container = styled.div`
  &,
  .cube,
  .wraaper-half-1,
  .wraaper-half-2,
  .container {
    transform-style: preserve-3d;
  }
  .box-fragment-1,
  .box-fragment-2,
  .box-fragment-3,
  .box-fragment-4,
  .box-fragment-5,
  .box-fragment-6 {
    position: absolute;
    opacity: 0.7;
  }
  .container {
    position: relative;
    width: 600px;
    height: 600px;
    margin: 450px auto 0;
    perspective: 900px;
  }
  .cube {
    width: 300px;
    height: 300px;
    animation: ${cubeAnimation} 7s forwards infinite;
    transform-origin: center 150px;
    transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
  }
  .wraaper-half-1 {
    height: 120px;
    top: 0;
    position: absolute;
    animation: ${halfFoldAnimation} 7s forwards infinite;
    transform-origin: 50% 100%;
  }
  .box-fragment {
    width: 60px;
    height: 60px;
    background-color: #000;
  }

  .box-fragment-1 {
    top: 0;
    left: 120px;
    transform-origin: 50% 100%;
    transform: translateY(0px);
    animation: ${fragmentAni1} 7s forwards infinite;
  }
  .box-fragment-2 {
    top: 60px;
    left: 120px;
    transform-origin: 50% 0%;
  }
  .box-fragment-3 {
    top: 120px;
    left: 120px;
    transform-origin: 50% 0%;
  }
  .box-fragment-4 {
    top: 180px;
    left: 120px;
    transform-origin: 50% 0%;
    animation: ${fragmentAni4} 7s forwards infinite;
  }
  .box-fragment-5 {
    left: 60px;
    top: 60px;
    transform-origin: 100% 50%;
    animation: ${fragmentAni5} 7s forwards infinite;
  }
  .box-fragment-6 {
    left: 180px;
    top: 120px;
    transform-origin: 0% 50%;
    animation: ${fragmentAni6} 7s forwards infinite;
  }
`
