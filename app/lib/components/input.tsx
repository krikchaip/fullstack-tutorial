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

  /** display error message below the input */
  showError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { icon, error, showError, ...otherProps } = props
  return (
    <label
      css={[
        tw`inline-block`,
        tw`relative`,
        tw`text-secondary leading-[1.375rem]`
      ]}
    >
      {icon && <Icon tw="absolute top-3 left-3 -translate-y-px" name={icon} />}
      <input
        css={[
          tw`w-full`,
          tw`p-3`,
          icon && tw`pl-11`,
          tw`text-[color:inherit] leading-[inherit]`,
          tw`outline[none] box-shadow[none] focus:(outline[none] box-shadow[none])`,
          tw`rounded-lg border border-solid border-faded focus:border-primary`,
          error && tw`border-danger focus:border-danger`,
          tw`transition`,
          tw`placeholder-current`
        ]}
        ref={ref}
        {...otherProps}
      />
      {showError && error && <p tw="mt-1 text-xs text-danger">{error}</p>}
    </label>
  )
}) as (props: InputProps) => JSX.Element
