//Libraries
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
//Helpers
import { optSector, optState } from 'src/helpers/constants'
//Types
import { UserData } from 'src/types/userTypes'
//Styles
import styles from './userForm.module.css'
import BaseButton from 'src/app/atoms/baseButton/baseButton'

const UserForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserData>()
  const onSubmit: SubmitHandler<UserData> = (data) => console.log(data)

  const label = (title: string) => (
    <label className="font-semibold text-xl text-bluegray-700">{title}</label>
  )

  return (
    <form className={`${styles.user_form}`} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.input_cnt}`}>
        {label('Id')}
        <InputText
          placeholder="Ingresar el id del Usuario"
          {...register('id')}
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
          showClear
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
          }}
        />
      </div>
    </form>
  )
}

export default UserForm
