import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: ReactNode
  suffix?: ReactNode
  value?: any
  onChange?: any
  error?: string
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<any, IInputProps>(
  (
    {
      type,
      icon,
      placeholder,
      className,
      id,
      defaultValue,
      suffix,
      error,
      ...rest
    }: IInputProps,
    ref
  ) => {
    return (
      <div>
        <div className={clsx('form__group field relative ', error && 'mb-2')}>
          <input
            ref={ref}
            type={type}
            className={clsx('form__field ', className)}
            placeholder={placeholder}
            id={id}
            defaultValue={defaultValue}
            required
            {...rest}
          />
          {suffix}
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
        {error && <div className="text-sm text-red-600 text-left">{error}</div>}
      </div>
    )
  }
)

export default Input
