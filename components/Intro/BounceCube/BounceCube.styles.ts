import styled from '@emotion/styled'

export const BounceCubeWrapper = styled.div`
  /* overflow: hidden; */
  /* margin: 0; */
  width: 100%;
  height: 100vh;
  perspective: 32em;
  /* background: #e9e9e9; */

  div {
    position: absolute;
    transform-style: preserve-3d;
  }

  .assembly {
    top: 50%;
    left: 50%;
    transform: rotateX(-45deg) rotateY(-45deg);
    animation: assembly-r 6s ease-in-out;
  }

  @keyframes assembly-r {
    0% {
      transform: rotateX(-45deg) rotateY(-45deg);
    }
    50% {
      transform: rotateX(45deg) rotateY(45deg);
    }
    100% {
      transform: rotateX(-45deg) rotateY(-45deg);
    }
  }

  .comp-3d {
    animation: r 6s ease-in-out;
  }

  .comp-3d--i {
    animation-name: ri;
    /* border: 10px solid red; */
  }

  .comp-3d--o {
    animation-name: ro;
    /* animation-name: ri; */
    /* border: 10px solid blue; */
  }

  @keyframes ri {
    0%,
    20% {
      transform: rotateY(-0.5turn);
    }
    50% {
      transform: none;
    }
    100%,
    80% {
      transform: rotateX(-0.5turn);
    }
  }

  @keyframes ro {
    0%,
    35% {
      transform: rotate(-0.5turn);
    }
    65%,
    100% {
      transform: none;
    }
  }

  div :not(.pos) > .cube:nth-child(1) {
    transform: translate3d(-4em, -4em, 0em);
  }

  div :not(.pos) > .cube:nth-child(2) {
    /* transform: translate3d(-4em, 0em, -4em); */
    transform: translate3d(-4em, 0em, -4em);
  }

  div :not(.pos) > .cube:nth-child(3) {
    transform: translate3d(-4em, 0em, 0em);
  }

  div :not(.pos) > .cube:nth-child(4) {
    transform: translate3d(-4em, 0em, 4em);
  }

  div :not(.pos) > .cube:nth-child(5) {
    transform: translate3d(-4em, 4em, 0em);
  }

  div :not(.pos) > .cube:nth-child(6) {
    transform: translate3d(0em, -4em, -4em);
  }

  div :not(.pos) > .cube:nth-child(7) {
    transform: translate3d(0em, -4em, 0em);
  }

  div :not(.pos) > .cube:nth-child(8) {
    transform: translate3d(0em, -4em, 4em);
  }

  div :not(.pos) > .cube:nth-child(9) {
    transform: translate3d(0em, 0em, -4em);
  }

  div :not(.pos) > .cube:nth-child(10) {
    transform: translate3d(0em, 0em, 0em);
  }

  div :not(.pos) > .cube:nth-child(11) {
    transform: translate3d(0em, 0em, 4em);
  }

  div :not(.pos) > .cube:nth-child(12) {
    transform: translate3d(0em, 4em, -4em);
  }

  div :not(.pos) > .cube:nth-child(13) {
    /* transform: translate3d(0em, 4em, 0em); */
    transform: translate3d(0em, 4em, 0em);
  }

  div :not(.pos) > .cube:nth-child(14) {
    /* transform: translate3d(0em, 4em, 4em); */
    transform: translate3d(0em, 4em, 4em);
  }

  div :not(.pos) > .cube:nth-child(15) {
    transform: translate3d(4em, -4em, 0em);
  }

  div :not(.pos) > .cube:nth-child(16) {
    transform: translate3d(4em, 0em, -4em);
  }

  div :not(.pos) > .cube:nth-child(17) {
    /* transform: translate3d(4em, 0em, 0em); */
    transform: translate3d(4em, 0em, 0em);
  }

  div :not(.pos) > .cube:nth-child(18) {
    /* transform: translate3d(4em, 0em, 4em); */
    transform: translate3d(4em, 0em, 4em);
  }

  div :not(.pos) > .cube:nth-child(19) {
    transform: translate3d(4em, 4em, 0em);
  }

  .pos:nth-child(1) {
    transform: scale3d(1, 1, 1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-child(2) {
    transform: scale3d(1, 1, -1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-child(3) {
    transform: scale3d(1, -1, 1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-child(4) {
    transform: scale3d(1, -1, -1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-child(5) {
    transform: scale3d(-1, 1, 1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-child(6) {
    transform: scale3d(-1, 1, -1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-child(7) {
    transform: scale3d(-1, -1, 1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-child(8) {
    transform: scale3d(-1, -1, -1) translate3d(4em, 4em, 4em);
  }

  .pos .cube {
    animation: m 6s ease-out;
  }

  // 각각의 cube를 이루는 면에 대한 style

  .cube__face {
    margin: -2em;
    width: 4em;
    height: 4em;
    box-shadow: 0 0 2em rgba(220, 220, 220, 0.5) inset;
    backface-visibility: hidden;
    background: whitesmoke;
  }

  .cube__face:nth-child(2n) {
    filter: brightness(0.97);
  }
  .cube__face:nth-child(n + 5) {
    filter: brightness(1.03);
  }
  .cube__face:nth-child(1) {
    transform: rotateY(0deg) translateZ(2em);
  }
  .cube__face:nth-child(2) {
    transform: rotateY(90deg) translateZ(2em);
  }
  .cube__face:nth-child(3) {
    transform: rotateY(180deg) translateZ(2em);
  }
  .cube__face:nth-child(4) {
    transform: rotateY(270deg) translateZ(2em);
  }
  .cube__face:nth-child(5) {
    transform: rotateX(90deg) translateZ(2em);
  }
  .cube__face:nth-child(6) {
    transform: rotateX(-90deg) translateZ(2em);
  }

  .comp-3d--i .cube__face {
    /* background: red; */
    /* animation-name: ri; */
    /* border: 10px solid red; */
  }

  .comp-3d--o .pos:nth-child(6) .cube__face {
    /* background: red; */
  }

  .comp-3d--o .pos:nth-child(7) .cube__face {
    /* background: green; */
  }

  .comp-3d--o .pos:nth-child(8) .cube__face {
    /* background: blue; */
  }

  @keyframes m {
    0%,
    5%,
    95%,
    100% {
      transform: none;
    }
    15% {
      transform: translate3d(0, 4em, 0);
    }
    25% {
      transform: translate3d(0, 4em, 4em);
    }
    35%,
    65% {
      transform: translate3d(4em, 4em, 4em);
    }
    75% {
      transform: translate3d(4em, 0, 4em);
    }
    85% {
      transform: translate3d(4em, 0, 0);
    }
  }
`