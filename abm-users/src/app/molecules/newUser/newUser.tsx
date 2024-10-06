'use client'
//Libraries
import { FC, useState } from 'react'
//Components
import BaseButton from 'src/app/atoms/baseButton/baseButton'
//Styles
import styles from './newUser.module.css'
import UserDialog from '../../Organisms/userDialog/userDialog'

const NewUser: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className={styles.new_user_cont}>
      <span className="font-bold text-4xl">Usuario</span>
      <BaseButton
        className="font-bold"
        onClick={() => setVisible(true)}
        props={{ icon: 'pi pi-plus', label: 'Nuevo Usuario', size: 'large' }}
      />
      <UserDialog
        visible={visible}
        onHide={() => {
          if (!visible) return
          setVisible(false)
        }}
      />
    </div>
  )
}

export default NewUser
