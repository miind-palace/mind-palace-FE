import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { FlippingLoaderProps } from './FlippingLoader'

const foldingAnimation = keyframes`
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`

const textAnimation = (size: number) => keyframes`
  100% {
    top: calc(${size / 2}px + 10px);
  }
`

const shadowAnimation = (size: number) => keyframes`
  100% {
    bottom: -18px;
    width: ${size * 2}px;
  }
`

export const Container = styled.div<FlippingLoaderProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${(props) => props.size && props.size * 2}px;
  height: ${(props) => props.size && props.size * 2}px;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 100;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -20px;
    margin: auto;
    width: ${(props) => props.size && props.size * 1.8}px;
    height: 6px;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.1);
    filter: blur(2px);
    border-radius: 100%;
    animation: ${(props) => props.size && shadowAnimation(props.size)} 0.5s ease infinite alternate;
  }
`

export const LoadingText = styled.span<FlippingLoaderProps>`
  font-size: ${(props) => props.textSize || 12}px;
  letter-spacing: 0.1em;
  display: block;
  color: ${(props) => props.textColor || 'black'};
  position: relative;
  top: ${(props) => props.size && props.size / 2}px;
  z-index: 2;
  animation: ${(props) => props.size && textAnimation(props.size)} 0.5s ease infinite alternate;
`

export const Wrapper = styled.div<FlippingLoaderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: inline-block;
  transform: rotate(45deg);
  font-size: 0;

  span {
    position: relative;
    width: ${(props) => props.size && props.size / 2}px;
    height: ${(props) => props.size && props.size / 2}px;
    transform: scale(1.1);
    display: inline-block;

    &::before {
      content: '';
      background-color: ${(props) => props.cubeColor || 'rgba(0,0,0,0.2)'};
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: ${(props) => props.size && props.size / 2}px;
      height: ${(props) => props.size && props.size / 2}px;
      transform-origin: 100% 100%;
      animation: ${foldingAnimation} 2.5s infinite linear both;
    }
  }

  .box2 {
    transform: rotateZ(90deg) scale(1.1);

    &::before {
      animation-delay: 0.3s;
    }
  }

  .box3 {
    transform: rotateZ(270deg) scale(1.1);

    &::before {
      animation-delay: 0.9s;
    }
  }

  .box4 {
    transform: rotateZ(180deg) scale(1.1);

    &::before {
      animation-delay: 0.6s;
    }
  }
`
