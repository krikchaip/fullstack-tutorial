import classNames, { Argument } from 'classnames'

/**
 * make `className` prop overridable from outside (user of this component).
 * and remove `className` prop for this component in favor of `c`.
 *
 * @example
 * // component.tsx
 * const { c, ...otherProps } = overrideClassName(props)
 * return (
 *   <div
 *     className={c('...')}
 *     {...otherProps}
 *   />
 * )
 *
 * // page.tsx ("custom-class" will append to the end)
 * return (
 *   <Component className="custom-class" />
 * )
 */
export function overrideClassName<T extends { className?: string }>(props: T) {
  const { className, ...otherProps } = props
  return {
    ...otherProps,
    c: (...args: Argument[]) => classNames(...args, className)
  }
}
