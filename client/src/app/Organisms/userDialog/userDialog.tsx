//Libraries
import { Dialog, DialogProps } from 'primereact/dialog'
import { FC } from 'react'
//Components
import Header from '../header/header'
import SimpleIconButton from 'src/app/atoms/simpleIconButton/simpleIconButton'
import UserForm from 'src/app/molecules/userForm/userForm'
//Styles
import styles from './userDialog.module.css'
//Types
import { UserData } from 'src/types/userTypes'

type UserDialogProps = {
  visible: boolean
  onHide: () => void
  props?: DialogProps
  userData?: UserData
}

const UserDialog: FC<UserDialogProps> = ({
  visible,
  onHide,
  props,
  userData,
}) => {
  return (
    <Dialog
      {...props}
      onHide={onHide}
      visible={visible}
      modal
      content={({ hide }) => (
        <main className={`${styles.user_dialog_cnt}`}>
          <Header
            leftSide={
              <h1 className={`text-4xl font-bold text-white`}>Usuario</h1>
            }
            rigthSide={<SimpleIconButton onClick={hide} icon="pi pi-minus" />}
          />
          <section className={`h-full bg-white`}>
            <UserForm userData={userData} onHide={onHide} />
          </section>
        </main>
      )}
    />
  )
}

export default UserDialog
