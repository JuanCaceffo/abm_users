'use client'
//Libraries
import { FC, useState } from 'react'
import Link from 'next/link'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
//Styles
import styles from './filter.module.css'
//Components
import BaseButton from 'src/app/atoms/baseButton/baseButton'
//Types
import { filterData, stateT } from 'src/types/filetTypes'
import useClientNavigation from 'src/hooks/useClientNavigation'
//Custom hooks

//TODO: Updatear componente con datos de SearchParams
// Este componente comparte estado con la pagina principal por medio de search params
const Filter: FC = () => {
  const [filterState, setFilterState] = useState<filterData>({})
  const { username, state } = filterState

  const { updateParams, actualFullPath } = useClientNavigation()

  const optEstado: stateT[] = ['ACTIVO', 'INACTIVO']

  //Funcion para controlar los inputs del filtro y actualizar el estado de los mismos
  const handleChange = (
    key: keyof filterData,
    e: DropdownChangeEvent | (EventTarget & HTMLInputElement)
  ) => {
    setFilterState((prev) => ({ ...prev, [key]: e.value }))
  }

  const handleLink = () => {
    const params = updateParams({
      username: username ?? '',
      state: state ?? '',
    })

    return actualFullPath(params)
  }

  return (
    <form className={styles.filer_container}>
      <section className={styles.input_container}>
        <IconField value={username} iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText
            className={`${styles.search} w-full`}
            placeholder="Search"
            onChange={(e) => {
              handleChange('username', e.target)
            }}
          />
        </IconField>
      </section>
      <section className={styles.input_container}>
        <Dropdown
          className={`${styles.search_dropdown} w-full h-full`}
          placeholder="Selecciona el estado"
          value={state}
          onChange={(e) => {
            handleChange('state', e)
          }}
          options={optEstado}
          checkmark
          showClear
        />
      </section>
      <section className={styles.filter_btns}>
        <Link href={handleLink()}>
          <BaseButton
            props={{
              icon: 'pi pi-filter',
              severity: 'secondary',
            }}
          />
        </Link>
        <BaseButton
          onClick={(e) => {
            e.preventDefault()
          }}
          props={{
            icon: 'pi pi-sliders-v',
            severity: 'secondary',
          }}
        />
      </section>
    </form>
  )
}

export default Filter
