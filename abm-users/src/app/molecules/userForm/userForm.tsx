'use client'
//Libraries
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
//Helpers
import { optSector, optState } from 'src/helpers/constants'
//Types
import { UserData } from 'src/types/userTypes'
//Styles
import styles from './userForm.module.css'
//Components
import BaseButton from 'src/app/atoms/baseButton/baseButton'
//Service
import { userService } from 'src/services/UserService'

//TODO: analizar si es mejor utilizar la enitadad de usuario para manejar errores y logica
//TODO: manejar los erroes del form
const UserForm: FC<{
  userData?: UserData
  onHide: () => void
}> = ({ onHide, userData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserData>({ defaultValues: userData })
  const router = useRouter()

  const onSubmit: SubmitHandler<UserData> = (data) => {
    const response = userData
      ? userService.updateUser(data)
      : userService.createUser(data)

    response
      .then(() => {
        onHide()
        router.refresh()
      })
      .catch((e: unknown) => {
        console.log(e)
        alert('No se pudo actualizar el usuario') //Todo: manejar los erroes adecuadamente
      })
  }

  const label = (title: string) => (
    <label className="font-semibold text-xl text-bluegray-700">{title}</label>
  )

  return (
    <form className={`${styles.user_form}`} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.input_cnt}`}>
        {label('Id')}
        <InputText
          placeholder="Ingresar el id del Usuario"
          type="number"
          disabled={Boolean(userData)} //Deshabilitamos el input si el usuario ya existe
          {...register('id', { required: true })}
        ></InputText>
      </div>
      <div className={`${styles.input_cnt}`}>
        {label('Usuario:')}
        <InputText
          placeholder="Ingresar el nombre del Usuario"
          {...register('usuario')}
        ></InputText>
      </div>
      <div className={`${styles.input_cnt}`}>
        {label('Estado:')}
        <Dropdown
          placeholder="Seleccionar el estado"
          value={watch('estado')}
          options={optState}
          {...register('estado')}
          checkmark
        ></Dropdown>
      </div>
      <div className={`${styles.input_cnt}`}>
        {label('Sector:')}
        <Dropdown
          placeholder="Seleccionar el Sector"
          value={+watch('sector')}
          options={optSector}
          {...register('sector')}
          checkmark
        ></Dropdown>
      </div>
      <div className="flex justify-content-center gap-3 w-full">
        <BaseButton title="Confirmar" props={{ icon: 'pi pi-check' }} />
        <BaseButton
          title="Cancelar"
          props={{ icon: 'pi pi-times', outlined: true }}
          onClick={(e) => {
            e.preventDefault()
            onHide()
          }}
        />
      </div>
    </form>
  )
}

export default UserForm
