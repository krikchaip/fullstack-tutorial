import tw from 'twin.macro'
import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react'

export type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  /** error message */
  error?: string

  /** display error message below the input */
  showError?: boolean

  /** text label above the input */
  label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { error, showError, label, ...otherProps } = props
    return (
      <label
        css={[
          tw`inline-block`,
          tw`relative`,
          tw`text-secondary leading-[1.375rem]`
        ]}
      >
        {label && (
          <div tw="mb-0.5 font-medium text-xs text-dimmed" aria-label={label}>
            {label}
          </div>
        )}
        <textarea
          css={[
            tw`w-full`,
            tw`p-3`,
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
  }
) as (props: TextareaProps) => JSX.Element