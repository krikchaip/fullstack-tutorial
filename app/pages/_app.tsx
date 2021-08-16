import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'

export function App({ Component: Page, pageProps }: AppProps) {
  return <Page {...pageProps} />
}

export default App
