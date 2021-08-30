import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import { overrideStyles } from 'lib/utils'

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function Input(props: InputProps) {
  const { c, s, ...otherProps } = overrideStyles(props)
  return <input className={c()} style={s()} {...otherProps} />
}
