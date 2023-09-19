import styled from '@emotion/styled'

export const BounceCubeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  perspective: 32em;

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
  }

  .comp-3d--o {
    animation-name: ro;
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

  div :not(.pos) > .cube:nth-of-type(1) {
    transform: translate3d(-4em, -4em, 0em);
  }

  div :not(.pos) > .cube:nth-of-type(2) {
    transform: translate3d(-4em, 0em, -4em);
  }

  div :not(.pos) > .cube:nth-of-type(3) {
    transform: translate3d(-4em, 0em, 0em);
  }

  div :not(.pos) > .cube:nth-of-type(4) {
    transform: translate3d(-4em, 0em, 4em);
  }

  div :not(.pos) > .cube:nth-of-type(5) {
    transform: translate3d(-4em, 4em, 0em);
  }

  div :not(.pos) > .cube:nth-of-type(6) {
    transform: translate3d(0em, -4em, -4em);
  }

  div :not(.pos) > .cube:nth-of-type(7) {
    transform: translate3d(0em, -4em, 0em);
  }

  div :not(.pos) > .cube:nth-of-type(8) {
    transform: translate3d(0em, -4em, 4em);
  }

  div :not(.pos) > .cube:nth-of-type(9) {
    transform: translate3d(0em, 0em, -4em);
  }

  div :not(.pos) > .cube:nth-of-type(10) {
    transform: translate3d(0em, 0em, 0em);
  }

  div :not(.pos) > .cube:nth-of-type(11) {
    transform: translate3d(0em, 0em, 4em);
  }

  div :not(.pos) > .cube:nth-of-type(12) {
    transform: translate3d(0em, 4em, -4em);
  }

  div :not(.pos) > .cube:nth-of-type(13) {
    transform: translate3d(0em, 4em, 0em);
  }

  div :not(.pos) > .cube:nth-of-type(14) {
    transform: translate3d(0em, 4em, 4em);
  }

  div :not(.pos) > .cube:nth-of-type(15) {
    transform: translate3d(4em, -4em, 0em);
  }

  div :not(.pos) > .cube:nth-of-type(16) {
    transform: translate3d(4em, 0em, -4em);
  }

  div :not(.pos) > .cube:nth-of-type(17) {
    transform: translate3d(4em, 0em, 0em);
  }

  div :not(.pos) > .cube:nth-of-type(18) {
    transform: translate3d(4em, 0em, 4em);
  }

  div :not(.pos) > .cube:nth-of-type(19) {
    transform: translate3d(4em, 4em, 0em);
  }

  .pos:nth-of-type(1) {
    transform: scale3d(1, 1, 1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-of-type(2) {
    transform: scale3d(1, 1, -1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-of-type(3) {
    transform: scale3d(1, -1, 1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-of-type(4) {
    transform: scale3d(1, -1, -1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-of-type(5) {
    transform: scale3d(-1, 1, 1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-of-type(6) {
    transform: scale3d(-1, 1, -1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-of-type(7) {
    transform: scale3d(-1, -1, 1) translate3d(4em, 4em, 4em);
  }

  .pos:nth-of-type(8) {
    transform: scale3d(-1, -1, -1) translate3d(4em, 4em, 4em);
  }

  .pos .cube {
    animation: m 6s ease-out;
  }

  .cube__face {
    margin: -2em;
    width: 4em;
    height: 4em;

    box-shadow: 0 0 2em rgba(220, 220, 220, 0.5) inset;
    background: whitesmoke;
    backface-visibility: hidden;
    animation: face_border 6s ease-in-out;

    border: 1px solid rgba(255, 255, 255, 0);
  }

  @keyframes face_border {
    0% {
      border-color: rgba(255, 255, 255, 0);
      background: rgba(72, 72, 72, 1);
      box-shadow: 0 0 2em rgba(72, 72, 72, 1) inset;
    }
    50% {
      border-color: rgba(255, 255, 255, 0.17);
      background: rgba(72, 72, 72, 1);
      box-shadow: 0 0 2em rgba(72, 72, 72, 1) inset;
    }
    100% {
      border-color: rgba(255, 255, 255, 0);
      background: whitesmoke;
      box-shadow: 0 0 2em rgba(220, 220, 220, 0.5) inset;
    }
  }

  .cube__face:nth-of-type(2n) {
    filter: brightness(0.97);
  }
  .cube__face:nth-of-type(n + 5) {
    filter: brightness(1.03);
  }
  .cube__face:nth-of-type(1) {
    transform: rotateY(0deg) translateZ(2em);
  }
  .cube__face:nth-of-type(2) {
    transform: rotateY(90deg) translateZ(2em);
  }
  .cube__face:nth-of-type(3) {
    transform: rotateY(180deg) translateZ(2em);
  }
  .cube__face:nth-of-type(4) {
    transform: rotateY(270deg) translateZ(2em);
  }
  .cube__face:nth-of-type(5) {
    transform: rotateX(90deg) translateZ(2em);
  }
  .cube__face:nth-of-type(6) {
    transform: rotateX(-90deg) translateZ(2em);
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
