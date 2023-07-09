import React from 'react'

const UserIcon = ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 3C9.71316 3 7.87879 4.83681 7.87879 7.07897V7.92108C7.87879 10.1632 9.71316 12 12 12C14.2868 12 16.1212 10.1632 16.1212 7.92108V7.07897C16.1212 4.83681 14.2868 3 12 3Z'
        fill='#022DB0'
      />
      <path
        d='M9.09091 13.4736C6.27928 13.4736 4 15.7004 4 18.4473V19.8684C4 21.0457 4.97683 22 6.18182 22H17.8182C19.0232 22 20 21.0457 20 19.8684V18.4473C20 15.7004 17.7207 13.4736 14.9091 13.4736H9.09091Z'
        fill='#022DB0'
      />
    </svg>
  )
}

export default UserIcon
