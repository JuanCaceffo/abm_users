'use client'
import { FC } from 'react'
import { Button } from 'primereact/button';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './button.module.css'

type BaseButtonType = { 
  title: string,
  onClick: () => void
}

export const BaseButton: FC<BaseButtonType> = ({title}) => {
  return <Button>{title}</Button>
} 
