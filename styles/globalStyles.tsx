import emotionReset from 'emotion-reset'
import { css } from '@emotion/react'

emotionReset.styles

const globalStyles = css`
  ${emotionReset}

  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard.css");

  * {
    box-sizing: border-box;
  }

  // prettier-ignore
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-family: 'Pretendard', sans-serif;
  }
`

export default globalStyles
