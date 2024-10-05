'use client'
//Libraries
import { FC, MouseEvent, ReactNode } from 'react'
import { Button, ButtonProps } from 'primereact/button'

//Styles
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './baseButton.module.css'

type BaseButtonType = {
  title?: string
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  props: ButtonProps,
  children?: ReactNode
}

const BaseButton: FC<BaseButtonType> = ({
  title,
  onClick = () => {},
  props
}) => {
  return (
    <Button
      {...props}
      onClick={(e) => {
        onClick(e)
      }}
    >
      {title}
    </Button>
  )
}

export default BaseButton
