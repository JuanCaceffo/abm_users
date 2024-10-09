//Libraries
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { FC, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Toast } from 'primereact/toast'
//Helpers
import { optSector, optState } from 'src/helpers/constants'
import { userSchema } from 'src/helpers/userSchema'
//Types
import { UserData } from 'src/types/userTypes'
//Styles
import styles from './userForm.module.css'
//Components
import BaseButton from 'src/app/atoms/baseButton/baseButton'
//Service
import { userService } from 'src/services/UserService'

//TODO: analizar si es mejor utilizar la enitadad de usuario para manejar errores y logica
const UserForm: FC<{
  userData?: UserData
  onHide: () => void
}> = ({ onHide, userData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<UserData>({
    defaultValues: userData,
    resolver: zodResolver(userSchema),
  })
  const router = useRouter()
  const toast = useRef<Toast>(null)

  const onSubmit: SubmitHandler<UserData> = (data) => {
    const isDirty = Object.values(dirtyFields).some((value) => value)

    if (isDirty) {
      const response = userData
        ? userService.updateUser(data)
        : userService.createUser(data)

      return response //Retornamos la promesa para que handleSubmit pueda manejar la promesa
        .then(() => {
          onHide()
          router.refresh()
        })
        .catch(() => {
          toast.current?.show({
            severity: 'error',
            detail: `No se pudo crear o actualizar el usuario`,
            life: 3000,
          })
        })
    } else {
      toast.current?.show({
        severity: 'warn',
        detail: `Debe actualizar algun campo`,
        life: 3000,
      })
    }
  }

  const label = (title: string) => (
    <label className="font-semibold text-2xl text-bluegray-700">{title}</label>
  )
  const error = (error?: string) => (
    <span className={`mt-1 text-red-600`} id="username-error" role="alert">
      {error}
    </span>
  )

  return (
    <form className={`${styles.user_form}`} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.input_cnt}`}>
        {label('Id')}
        <div className="flex flex-column w-full">
          <InputText
            className="p-inputtext-lg"
            placeholder="Ingresar el id del Usuario"
            type="number"
            disabled={Boolean(userData)} //Deshabilitamos el input si el usuario ya existe
            {...register('id', { valueAsNumber: true })}
            invalid={Boolean(errors.id)}
          ></InputText>
          {error(errors.id?.message)}
        </div>
      </div>

      <div className={`${styles.input_cnt}`}>
        {label('Usuario:')}
        <div className="flex flex-column w-full">
          <InputText
            className="p-inputtext-lg"
            placeholder="Ingresar el nombre del Usuario"
            {...register('usuario')}
            invalid={Boolean(errors.usuario)}
          ></InputText>
          {error(errors.usuario?.message)}
        </div>
      </div>

      <div className={`${styles.input_cnt}`}>
        {label('Estado:')}
        <div className="flex flex-column w-full">
          <Dropdown
            className="p-inputtext-lg"
            placeholder="Seleccionar el estado"
            value={watch('estado')}
            options={optState}
            {...register('estado')}
            checkmark
          ></Dropdown>
          {error(errors.estado?.message)}
        </div>
      </div>

      <div className={`${styles.input_cnt}`}>
        {label('Sector:')}
        <div className="flex flex-column w-full">
          <Dropdown
            className="p-inputtext-lg"
            placeholder="Seleccionar el Sector"
            value={+watch('sector')}
            options={optSector}
            {...register('sector', { valueAsNumber: true })}
            checkmark
          ></Dropdown>
          {error(errors.sector?.message)}
        </div>
      </div>

      <div className="flex justify-content-center gap-3 w-full">
        <BaseButton
          title="Confirmar"
          props={{ icon: 'pi pi-check', size: 'large', loading: isSubmitting }}
        />
        <BaseButton
          title="Cancelar"
          props={{ icon: 'pi pi-times', outlined: true, size: 'large' }}
          onClick={(e) => {
            e.preventDefault()
            onHide()
          }}
        />
      </div>
      <Toast ref={toast} />
    </form>
  )
}

export default UserForm
