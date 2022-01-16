// ref: https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion#complete-the-typescript-setup

import 'twin.macro'

import { css as cssImport } from '@emotion/react'

declare module 'twin.macro' {
  const css: typeof cssImport
}
