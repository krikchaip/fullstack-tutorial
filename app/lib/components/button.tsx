import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

import { overrideStyles } from 'lib/utils'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** @default 'solid'*/
  variant?: 'solid' | 'outline'
}

export function Button(props: ButtonProps) {
  const { c, s, variant = 'solid', ...otherProps } = overrideStyles(props)
  return (
    <button
      className={c(
        'h-10',
        'flex items-center justify-center',
        'text-center',
        variant === 'solid' && 'text-white',
        'rounded-lg',
        'hover:bg-opacity-80 active:bg-opacity-95',
        'active:ring-2 focus-visible:outline-none focus-visible:ring-2',
        'transition'
      )}
      style={s()}
      {...otherProps}
    />
  )
}
