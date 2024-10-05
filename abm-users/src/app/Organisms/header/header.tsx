//Libraries
import Image from 'next/image'
import { FC, ReactNode } from 'react'
//Styles
import styles from './header.module.css'
import SimpleIconButton from 'src/app/atoms/simpleIconButton/simpleIconButton'

type headerType = {
  className?: string,
  leftSide?: ReactNode
  rigthSide?: ReactNode
}

const Header: FC<headerType> = ({
  className,
  leftSide = <Image width={26} height={26} src="/public/logo.png" alt="Logo" />,
  rigthSide
}) => {
  return (
    <>
      <header className={`${className} ${styles.header}`}>
        {leftSide}
        <ul className={styles.nav}>
          <SimpleIconButton icon='pi-cog'/>
          {rigthSide}
        </ul>
      </header>
    </>
  )
}
export default Header
