import tw from 'twin.macro'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type IconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /** refer to svg icon filename inside `/pubilc/icon` */
  name: string
}

export function Icon(props: IconProps) {
  const { name, ...otherProps } = props
  return (
    <div
      css={[
        tw`w-6 h-6`,
        tw`inline-block`,
        tw`text-[color:inherit]`,
        tw`bg-current bg-center`,
        { maskImage: `url(${ICON_PATH}/${name}.svg)`, maskRepeat: 'no-repeat' }
      ]}
      {...otherProps}
    />
  )
}

const ICON_PATH = '/icon'
