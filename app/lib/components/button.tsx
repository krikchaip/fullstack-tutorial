import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

import { overrideClassName } from 'lib/utils'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button(props: ButtonProps) {
  const { c, ...otherProps } = overrideClassName(props)
  return <button className={c()} {...otherProps} />
}
