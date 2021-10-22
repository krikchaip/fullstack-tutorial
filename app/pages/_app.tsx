import type { AppProps } from 'next/app'

import { GlobalStyles } from 'styles'
import { Navbar } from 'lib/components'

export function App({ Component: Page, pageProps }: AppProps) {
  const error = pageProps?.statusCode === 404
  const shouldDisplayNavbar = true

  if (error) {
    return <Page {...pageProps} />
  }

  return (
    <>
      <GlobalStyles />
      <div tw="w-screen h-screen flex flex-col">
        {shouldDisplayNavbar && <Navbar tw="px-4" />}
        <div tw="p-4 flex-1 overflow-x-hidden overflow-y-scroll">
          <Page {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default App
