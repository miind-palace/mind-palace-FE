// import { Assembly, Body, Cube, CubeFace } from './ScatteredCube.styles'

import styled from '@emotion/styled'

const nc = 5 // cubes per dimension same as in Jade
const nf = 6 // number of cube faces
const n4gon = 4 // number of square edges/ vertices
const l = '1.5em' // cube edge length
const f = [2, 1.5] // multiplying factors
const t = '.65s' // animation duration

const m = 0.5 * (nc - 1) // constant, compute here
const hu = 360 / (nc + 1) // hue unit
// base angle corresponding to square edge
const ba4gon = 360 / n4gon
const tu = (2 * parseFloat(t)) / Math.pow(m, 3) // delay unit

const Container = styled.div`
  position: absolute;
  transform-style: preserve-3d;
`

const Assembly = styled(Container)`
  top: 50%;
  left: 50%;
  transform: rotateX(-22.5deg) rotateY(-30deg);
`

const Cube = styled(Container)`
  animation: a ${t} cubic-bezier(0.65, 0.05, 0.35, 1) infinite alternate;
  /* ${(props) => props.drag && 'animation-play-state: paused;'} */

  ${(props) => {
    let styles = ''
    for (let i0 = 0; i0 < nc; i0++) {
      const j0 = i0 - m
      const k0 = Math.pow(j0, 2)
      const xi = `${f[0] * j0 * parseFloat(l)}` // initial x coord
      const xf = `${f[1] * parseFloat(xi)}` // final x coord
      const r = `${(nc - i0 - 0.5) * hu}` // red component

      for (let i1 = 0; i1 < nc; i1++) {
        const j1 = i1 - m
        const k1 = Math.pow(j1, 2)
        const yi = `${f[0] * j1 * parseFloat(l)}` // initial y coord
        const yf = `${f[1] * parseFloat(yi)}` // final y coord
        const g = `${(i1 + 0.5) * hu}` // green component

        for (let i2 = 0; i2 < nc; i2++) {
          const j2 = i2 - m
          const k2 = Math.pow(j2, 2)
          const zi = `${f[0] * j2 * parseFloat(l)}` // initial z coord
          const zf = `${f[1] * parseFloat(zi)}` // final z coord
          const b = `${(nc - i2 - 0.5) * hu}` // blue component
          const dt = Math.sqrt(k0 + k1 + k2) * tu
          // current cube index
          const idx = i0 * Math.pow(nc, 2) + i1 * nc + i2 + 1

          styles += `
            &:nth-child(${idx}) {
              transform: translate3d(${xi}, ${yi}, ${zi});
              color: rgb(${r}, ${g}, ${b});
              animation-name: a${idx};
              animation-delay: -${dt}s;
            }
          `

          styles += `
            @keyframes a${idx} {
              to { transform: translate3d(${xf}, ${yf}, ${zf}); }
            }
          `
        }
      }
    }
    return styles
  }}
`

const CubeFace = styled.div`
  box-sizing: border-box;
  margin: -0.5 * ${l};
  border: solid 1px #ccc;
  width: ${l};
  height: ${l};
  backface-visibility: hidden;
  background: currentcolor;

  ${(props) => {
    let styles = ''
    for (let i = 0; i < nf; i++) {
      styles += `
        &:nth-child(${i + 1}) {
          transform: ${
            i < n4gon ? `rotateY(${i * ba4gon}deg)` : `rotateX(${Math.pow(-1, i) * ba4gon}deg)`
          } translateZ(0.5 * ${l});
        }
      `
    }
    return styles
  }}
`

const Body = styled.div`
  overflow: hidden;
  margin: 0;
  height: 100vh;
  perspective: 40em;
  background: #111;
  text-align: center;

  &:before {
    color: #eee;
    font: 2.5em/2 satisfy, cursive;
    content: 'drag me!';
  }
`

const ScatteredCube = () => {
  return (
    <Body>
      <Assembly>
        {Array.from({ length: Math.pow(nc, 3) }, (_, idx) => (
          <Cube key={idx}>
            {Array.from({ length: nf }, (_, faceIdx) => (
              <CubeFace key={faceIdx} />
            ))}
          </Cube>
        ))}
      </Assembly>
    </Body>
  )
}

export default ScatteredCube
