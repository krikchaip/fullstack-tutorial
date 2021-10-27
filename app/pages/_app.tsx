import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import tw from 'twin.macro'

import { GlobalStyles } from 'styles'
import { Navbar } from 'lib/components'

export function App({ Component: Page, pageProps }: AppProps) {
  const router = useRouter()

  const error = pageProps?.statusCode === 404

  if (error) {
    return <Page {...pageProps} />
  }

  return (
    <>
      <GlobalStyles />
      <div tw="w-screen h-screen flex flex-col">
        <Navbar
          css={[
            tw`px-4`,
            ['/signup', '/login'].includes(router.pathname) && tw`tablet:hidden`
          ]}
        />
        <div tw="p-4 flex-1 overflow-x-hidden overflow-y-scroll">
          <Page {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default App
