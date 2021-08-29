import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import { overrideClassName } from 'lib/utils'

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function Input(props: InputProps) {
  const { c, ...otherProps } = overrideClassName(props)
  return <input className={c()} {...otherProps} />
}
