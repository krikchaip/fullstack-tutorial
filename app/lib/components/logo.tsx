import tw from 'twin.macro'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type LogoProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function Logo(props: LogoProps) {
  const { ...otherProps } = props
  return (
    <div
      css={[
        tw`w-32 h-[18px]`,
        tw`bg-cover bg-center`,
        tw`rounded`,
        { backgroundImage: `url('/image/logo.png')` }
      ]}
      {...otherProps}
    ></div>
  )
}
