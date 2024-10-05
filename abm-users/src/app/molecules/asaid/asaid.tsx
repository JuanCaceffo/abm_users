//Libraries
import { FC, ReactNode } from 'react'
//Styles
import styles from './asaid.module.css'
import SimpleIconButton from 'src/app/atoms/simpleIconButton/simpleIconButton'

const Asaid: FC<{ children?: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const buttons = Array(5).fill(0)

  return (
    <aside className={`${className} ${styles.asaid}`}>
      <nav className={styles.nav_container}>
        {buttons.map((value) => (
          <SimpleIconButton key={value} icon="pi-box" />
        ))}
        {children}
      </nav>
    </aside>
  )
}

export default Asaid
