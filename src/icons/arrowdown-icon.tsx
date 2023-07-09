import React, { SVGProps } from 'react'

const ArrowDownIcon = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.36498 8.375C6.13692 8.375 5.89082 8.46794 5.84619 8.7001C5.80636 8.90729 5.86025 9.13161 6.00784 9.29247L9.57927 13.185C9.81172 13.4383 10.1886 13.4383 10.4211 13.185L13.9925 9.29247C14.1401 9.13161 14.194 8.90729 14.1541 8.7001C14.1095 8.46794 13.8634 8.375 13.6353 8.375L6.36498 8.375Z"
        fill={fill || '#0D0434'}
      />
    </svg>
  )
}

export default ArrowDownIcon
