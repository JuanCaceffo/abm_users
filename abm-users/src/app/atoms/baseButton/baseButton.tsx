'use client'
//Libraries
import { FC, MouseEvent } from 'react'
import { Button, ButtonProps } from 'primereact/button';

//Styles
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './baseButton.module.css'

type BaseButtonType = { 
  title: string,
  className: string,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void,
  props: ButtonProps
}

export const BaseButton: FC<BaseButtonType> = ({title, onClick, props}) => {
  return <Button
    onClick={(e) => {onClick(e)} }
    {...props}
  >
    {title}
    </Button>
} 
