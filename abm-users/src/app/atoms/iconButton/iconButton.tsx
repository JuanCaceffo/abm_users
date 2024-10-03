import { FC } from 'react'
import styles from './iconButton.module.css'

type iconButtonProps = {
  onClick?: () => void,
  iconClassname: string,
  withBackground?: boolean
}

const IconButton: FC<iconButtonProps> = (
{
  onClick,
  iconClassname,
  withBackground = false
}

) => {
  return <button 
      className={`${(withBackground) ? styles.button_bkg : ''} ${styles.button_container}`}
      onClick={onClick}
    >
    <i className={`${iconClassname} ${styles.icon}`} ></i>
  </button>  
}

export default IconButton