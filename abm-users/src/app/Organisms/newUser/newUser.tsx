'use client'
//Libraries
import { FC, useState } from 'react'
//Components
import BaseButton from 'src/app/atoms/baseButton/baseButton'
//Styles
import styles from './newUser.module.css'

const NewUser: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={styles.new_user_cont}>
      <span className="font-bold text-4xl">Usuario</span>
      <BaseButton
        className="font-bold"
        props={{ icon: 'pi pi-plus', label: 'Nuevo Usuario', size: 'large' }}
      />
    </div>
  )
}

export default NewUser
