'use client'
//Libraries
import { FC, MouseEvent, ReactNode } from 'react'
import { Button, ButtonProps } from 'primereact/button'

type BaseButtonType = {
  title?: string
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  props?: ButtonProps
  children?: ReactNode
}

const BaseButton: FC<BaseButtonType> = ({
  title,
  onClick = () => {},
  props,
}) => {
  return (
    <Button
      onClick={(e) => {
        onClick(e)
      }}
      {...props}
    >
      {title}
    </Button>
  )
}

export default BaseButton
