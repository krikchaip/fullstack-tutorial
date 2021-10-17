import tw from 'twin.macro'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** @default 'solid'*/
  variant?: 'solid' | 'outline'
}

export function Button(props: ButtonProps) {
  const { variant = 'solid', ...otherProps } = props
  return (
    <button
      css={[
        tw`h-10`,
        tw`flex items-center justify-center`,
        tw`text-center`,
        variant === 'solid' && tw`text-white`,
        tw`rounded-lg`,
        tw`hover:bg-opacity-80 active:bg-opacity-95`,
        tw`active:ring-2 focus-visible:outline-none focus-visible:ring-2`,
        tw`transition`
      ]}
      {...otherProps}
    />
  )
}
