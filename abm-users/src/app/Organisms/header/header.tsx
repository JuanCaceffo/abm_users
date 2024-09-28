import Image from "next/image";
import { FC, ReactNode } from "react";
import styles from './header.module.css'

type headerType = {
  leftSide?: ReactNode,
  rigthSide?: ReactNode
}

const Header: FC<headerType> = (
  {
    leftSide = 
    <Image
      width={46}
      height={46}
      src="/public/logo.png"
      alt="Logo" 
    />,
    rigthSide
  }
) => {

  return <>
  <header className={styles.header}>
    {leftSide}
    {rigthSide}
  </header>
  </>
  
}
export default Header