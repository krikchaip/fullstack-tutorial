import tw from 'twin.macro'
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react'

import { Icon } from './icon'

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  /** refer to svg icon filename inside `/pubilc/icon` */
  icon?: string

  /** error message */
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { icon, error, ...otherProps } = props
  return (
    <label
      css={[
        tw`inline-block`,
        tw`relative`,
        tw`text-[#828282] leading-[1.375rem]`,
        tw`rounded-lg border-solid border border-[#BDBDBD]`
      ]}
    >
      {icon && <Icon tw="absolute top-3 left-3 -translate-y-px" name={icon} />}
      <input
        css={[
          tw`w-full`,
          tw`p-3`,
          icon && tw`pl-11`,
          tw`text-[color:inherit] leading-[inherit]`,
          tw`rounded-[inherit] border-none`,
          tw`transition`,
          tw`placeholder-current`
        ]}
        ref={ref}
        {...otherProps}
      />
    </label>
  )
}) as (props: InputProps) => JSX.Element
