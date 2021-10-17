import { Global } from '@emotion/react'
import { GlobalStyles as Preflight } from 'twin.macro'

import { base } from './base'
import { fontFace } from './font-face'

export const GlobalStyles = () => (
  <>
    <Preflight />
    <Global styles={base} />
    <Global styles={fontFace} />
  </>
)
