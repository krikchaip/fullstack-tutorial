import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { overrideStyles } from 'lib/utils'

export type LogoProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function Logo(props: LogoProps) {
  const { c, s, ...otherProps } = overrideStyles(props)
  return (
    <div
      className={c('w-32 h-4 bg-gray-300 rounded')}
      style={s()}
      {...otherProps}
    ></div>
  )
}
