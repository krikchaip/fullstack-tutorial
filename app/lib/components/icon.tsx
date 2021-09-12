import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { overrideStyles } from 'lib/utils'

export type IconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /** refer to svg icon filename inside `/pubilc/icon` */
  name: string
}

export function Icon(props: IconProps) {
  const { c, s, name, ...otherProps } = overrideStyles(props)
  return (
    <div
      className={c(
        'w-6 h-6',
        'inline-block',
        'text-[color:inherit]',
        'bg-current bg-center'
      )}
      style={s({ maskImage: `url("${ICON_PATH}/${name}.svg")` })}
      {...otherProps}
    />
  )
}

const ICON_PATH = '/icon'
