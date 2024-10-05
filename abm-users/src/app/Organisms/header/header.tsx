//Libraries
import Image from 'next/image'
import { FC, ReactNode } from 'react'
//Styles
import styles from './header.module.css'

type headerType = {
  leftSide?: ReactNode
  rigthSide?: ReactNode
}

const Header: FC<headerType> = ({
  leftSide = <Image width={26} height={26} src="/public/logo.png" alt="Logo" />,
  rigthSide,
}) => {
  return (
    <>
      <header className={styles.header}>
        {leftSide}
        <ul className={styles.nav}>
          <button className={`${styles.setting_btn} pi pi-cog`}></button>
          {rigthSide}
        </ul>
      </header>
    </>
  )
}
export default Header
