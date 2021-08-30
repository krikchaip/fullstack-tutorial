import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { overrideStyles } from 'lib/utils'

import { Logo } from './logo'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export function Navbar(props: NavbarProps) {
  const { c, s, ...otherProps } = overrideStyles(props)
  return (
    <nav
      className={c('py-4 flex items-center justify-between')}
      style={s()}
      {...otherProps}
    >
      <Logo />
    </nav>
  )
}
