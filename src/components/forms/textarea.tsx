import clsx from 'clsx'
import React from 'react'

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  error?: string
}

export type Ref = HTMLButtonElement

// eslint-disable-next-line react/display-name
const Textarea = React.forwardRef<any, TextareaProps>(
  (
    {
      placeholder,
      className,
      id,
      rows,
      defaultValue,
      error,
      ...rest
    }: TextareaProps,
    ref
  ) => {
    return (
      <>
        <div className={clsx('form__group field', error && 'mb-1')}>
          <textarea
            ref={ref}
            className={clsx('form__field ', className)}
            placeholder={placeholder}
            id={id}
            rows={rows}
            defaultValue={defaultValue}
            {...rest}
          />
          <label
            htmlFor={id}
            className={
              defaultValue
                ? 'absolute text-[10px] left-0 px-[15px] top-1'
                : 'form__label'
            }
          >
            {placeholder}
          </label>
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
      </>
    )
  }
)

export default Textarea
