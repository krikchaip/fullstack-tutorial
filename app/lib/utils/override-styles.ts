import { CSSProperties } from 'react'
import classNames, { Argument } from 'classnames'
import { prefix } from 'inline-style-prefixer'

/**
 * make `className` and `style` prop overridable from outside (user of this component).
 * and remove `className` and `style` prop from this component in favor of `c` and `s` respectively.
 *
 * @example
 * // component.tsx
 * const { c, s, ...otherProps } = overrideStyles(props)
 * return (
 *   <div
 *     className={c('...')}
 *     style={s({ ... })}
 *     {...otherProps}
 *   />
 * )
 *
 * // page.tsx
 * // "custom-class" will append to the end of className.
 * // style object will merge with the existing one inside.
 * return (
 *   <Component
 *     className="custom-class"
 *     style={{ boxShadow: '...' }}
 *   />
 * )
 */
export function overrideStyles<
  T extends { className?: string; style?: CSSProperties }
>(props: T) {
  const { className, style, ...otherProps } = props
  return {
    ...otherProps,
    c: (...args: Argument[]) => classNames(...args, className),
    s: (css?: CSSProperties): CSSProperties => prefix({ ...css, ...style })
  }
}
