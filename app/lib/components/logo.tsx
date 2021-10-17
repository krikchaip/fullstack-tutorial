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
      css={[tw`w-32 h-4`, tw`bg-gray-300`, tw`rounded`]}
      {...otherProps}
    ></div>
  )
}
