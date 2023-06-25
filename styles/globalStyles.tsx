import emotionReset from 'emotion-reset'
import { css } from '@emotion/react'

const globalStyles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }
`

export default globalStyles
