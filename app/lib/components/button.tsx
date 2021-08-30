import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

import { overrideStyles } from 'lib/utils'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button(props: ButtonProps) {
  const { c, s, ...otherProps } = overrideStyles(props)
  return <button className={c()} style={s()} {...otherProps} />
}
