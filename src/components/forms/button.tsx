import SpinnerIcon from '@/icons/spinner-icon'
import clsx from 'clsx'
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  forwardRef,
} from 'react'

type VariantType = 'outline' | 'solid'
type RoundedType = 'rounded' | 'default'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: 'small' | 'medium' | 'large' | 'custom'
  isLoading?: boolean
  variant?: VariantType
  rounded?: RoundedType
  icon?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      size = 'medium',
      disabled,
      isLoading,
      children,
      rounded = 'rounded',
      variant = 'solid',
      color,
      icon,
      ...buttonProps
    },
    ref
  ) => {
    const baseClassName = [
      'flex items-center  gap-2 ',
      className,
      disabled ? 'opacity-40 cursor-not-allowed' : 'opacity-100',
    ]
    const roundedConfig = {
      rounded: 'rounded-full',
      default: 'rounded',
    }

    const varianConfig = {
      solid: 'bg-[#022DB0] text-white',
      outline: 'bg-[#E6EAF8] border-[1.5px] border-[#022DB0] text-[#022DB0]',
    }

    switch (size) {
      case 'large':
        baseClassName.push('px-6 py-[13px]')
        break
      case 'medium':
        baseClassName.push('px-4 py-[9px]')
        break
      case 'small':
        baseClassName.push('px-2 py-[5px]')
        break
      case 'custom':
      default:
      // custom size, do nothing
    }

    return (
      <button
        className={clsx(
          'text-sm font-medium',
          baseClassName.filter(Boolean).join(' '),
          varianConfig[variant],
          roundedConfig[rounded],
          color === 'secondary' && 'secondary',
          isLoading && 'justify-center flex'
        )}
        ref={ref}
        disabled={isLoading || disabled}
        {...buttonProps}
      >
        {isLoading ? (
          <div className="flex justify-center">
            <SpinnerIcon className="animate-spin w-11 h-6" />
          </div>
        ) : (
          <>
            {icon && <div className="w-[10%]">{icon}</div>}
            <div className={clsx('text-center', icon ? 'w-[90%]' : 'w-full')}>
              {children}
            </div>
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
