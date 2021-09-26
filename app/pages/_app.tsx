import { GlobalStyles } from 'twin.macro'

import type { AppProps } from 'next/app'

import { Navbar } from 'lib/components'

export function App({ Component: Page, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <div className="w-screen h-screen flex flex-col">
        <Navbar className="px-4" />
        <div className="p-4 flex-1 overflow-x-hidden overflow-y-scroll">
          <Page {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default App
