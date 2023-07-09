import React from 'react'

const DoneIcon = ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...rest}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="25" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5ZM45.3412 24.0912C46.2199 23.2126 46.2199 21.7879 45.3412 20.9093C44.4626 20.0306 43.0379 20.0306 42.1593 20.9092L26.5388 36.5295L17.8412 27.8319C16.9626 26.9532 15.5379 26.9532 14.6593 27.8319C13.7806 28.7105 13.7806 30.1352 14.6592 31.0138L24.9478 41.3025C25.8265 42.1812 27.2511 42.1812 28.1298 41.3025L45.3412 24.0912Z"
        fill="#00BE90"
      />
    </svg>
  )
}

export default DoneIcon
