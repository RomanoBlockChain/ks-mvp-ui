import React from 'react'

const CheckCircle = ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="6" cy="6" r="5" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1ZM9.06824 4.81825C9.24398 4.64251 9.24398 4.35759 9.06825 4.18185C8.89251 4.00612 8.60759 4.00611 8.43185 4.18185L5.30776 7.3059L3.56825 5.56637C3.39251 5.39064 3.10759 5.39064 2.93185 5.56637C2.75612 5.74211 2.75611 6.02703 2.93185 6.20277L4.98956 8.2605C5.1653 8.43623 5.45022 8.43623 5.62596 8.2605L9.06824 4.81825Z"
        fill={fill || '#00BE90'}
      />
    </svg>
  )
}

export default CheckCircle
