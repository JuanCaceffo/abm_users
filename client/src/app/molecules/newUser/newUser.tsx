'use client'
//Libraries
import { FC, useState } from 'react'
//Components
import BaseButton from 'src/app/atoms/baseButton/baseButton'
import UserDialog from '../../Organisms/userDialog/userDialog'
//Styles
import styles from './newUser.module.css'

const NewUser: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className={styles.new_user_cont}>
      <span className="font-bold text-4xl">Usuarios</span>
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
