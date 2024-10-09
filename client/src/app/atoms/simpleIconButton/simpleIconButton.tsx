//Libraries
import { FC, MouseEvent } from 'react'
//Styles
import styles from './simpleIconButton.module.css'

type SimpleIconButtonT = {
  icon: string
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const SimpleIconButton: FC<SimpleIconButtonT> = ({ icon, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.simple_icon} pi ${icon}`}
    />
  )
}

export default SimpleIconButton
