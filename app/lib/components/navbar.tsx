import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { overrideClassName } from 'lib/utils'

import { Logo } from './logo'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export function Navbar(props: NavbarProps) {
  const { c, ...otherProps } = overrideClassName(props)
  return (
    <nav
      className={c('py-4 flex items-center justify-between')}
      {...otherProps}
    >
      <Logo />
    </nav>
  )
}
