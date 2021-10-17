import tw from 'twin.macro'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { Logo } from './logo'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export function Navbar(props: NavbarProps) {
  const { ...otherProps } = props
  return (
    <nav
      css={[tw`py-4`, tw`flex items-center justify-between`]}
      {...otherProps}
    >
      <Logo />
    </nav>
  )
}
