import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react'
import classNames from 'classnames'

import { overrideStyles } from 'lib/utils'

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
  const { c, s, icon, error, ...otherProps } = overrideStyles(props)
  return (
    <label
      className={c(
        'inline-block relative text-[#828282] leading-[1.375rem] rounded-lg border-solid border border-[#BDBDBD]'
      )}
      style={s()}
    >
      {icon && (
        <Icon className="absolute top-3 left-3 -translate-y-px" name={icon} />
      )}
      <input
        className={classNames(
          'w-full p-3 text-[color:inherit] leading-[inherit] rounded-[inherit] border-none transition placeholder-current',
          { 'pl-11': !!icon }
        )}
        ref={ref}
        {...otherProps}
      />
    </label>
  )
}) as (props: InputProps) => JSX.Element
