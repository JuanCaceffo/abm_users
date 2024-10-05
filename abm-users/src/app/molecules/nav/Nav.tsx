//Libraries
import { FC, PropsWithChildren } from 'react'
//Styles
import styles from './nav.module.css'
import SimpleIconButton from 'src/app/atoms/simpleIconButton/simpleIconButton'

const Nav: FC<PropsWithChildren> = ({ children }) => {
  const buttons = Array(5).fill(0)

  return <ul className={styles.nav_container}>
    {buttons.map((value) => (
      <SimpleIconButton key={value} icon='pi-box'/>
    ))}
    {children}
  </ul>
}

export default Nav
