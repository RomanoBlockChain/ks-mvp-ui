import React from 'react'

const CheckedRadio = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.10254 12C6.10254 8.74294 8.74291 6.10257 12 6.10257C15.257 6.10257 17.8974 8.74294 17.8974 12C17.8974 15.2571 15.257 17.8974 12 17.8974C8.74291 17.8974 6.10254 15.2571 6.10254 12Z"
        fill="#022DB0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.53846 12C3.53846 7.32682 7.32682 3.53846 12 3.53846C16.6732 3.53846 20.4615 7.32682 20.4615 12C20.4615 16.6732 16.6732 20.4615 12 20.4615C7.32682 20.4615 3.53846 16.6732 3.53846 12Z"
        fill="#022DB0"
      />
    </svg>
  )
}

export default CheckedRadio
