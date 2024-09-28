import Image from "next/image";
import { FC, ReactNode } from "react";
import styles from './header.module.css'
import SettingButton from "src/app/atoms/settingButton/settingButton";

type headerType = {
  leftSide?: ReactNode,
  rigthSide?: ReactNode
}

const Header: FC<headerType> = (
  {
    leftSide = 
    <Image
      width={26}
      height={26}
      src="/public/logo.png"
      alt="Logo" 
    />,
    rigthSide
  }
) => {

  return <>
  <header className={styles.header}>
    {leftSide}
    <ul className={styles.nav}>
    <SettingButton/>
    {rigthSide}
    </ul>
  </header>
  </>
  
}
export default Header