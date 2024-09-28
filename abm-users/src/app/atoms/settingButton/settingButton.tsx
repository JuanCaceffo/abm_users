import { FC } from 'react'
import styles from './settingButton.module.css'

type settingButtonType = {
  onClick?: () => void
}

const SettingButton: FC<settingButtonType> = (
{
  onClick
}

) => {
  return <button 
      className={styles.header_button}
      onClick={onClick}
    >
    <i className={"pi pi-cog "+styles.icon} ></i>
  </button>  
}

export default SettingButton