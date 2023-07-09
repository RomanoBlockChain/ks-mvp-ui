import clsx from 'clsx'
import React from 'react'

type ContainerPropsType = {
  className?: string
  children: JSX.Element
}

const Container: React.FC<ContainerPropsType> = ({ children, className }) => {
  return (
    <div className={clsx('mx-[33px] md:mx-[60px] 2xl:px-[160px] ', className)}>
      {children}
    </div>
  )
}

export default Container
