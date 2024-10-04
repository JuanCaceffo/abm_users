'use client'
//Libraries
import { FC, useState } from 'react'
import Link from 'next/link';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
//Styles
import styles from './filter.module.css'
//Components
import IconButton from 'src/app/atoms/iconButton/iconButton';
//Types
import { filterData, stateT } from 'src/types/filetTypes';

const Filter: FC = () => {

  const [filterState, setFilterState] = useState<filterData>({}) 
  const {username, state} = filterState 

  const optEstado: stateT[] = [
    'ACTIVO',
    'INACTIVO'
  ]

  //Funcion para controlar los inputs del filtro y actualizar el estado de los mismos
  const handleChange = (key: keyof filterData, e: DropdownChangeEvent | EventTarget & HTMLInputElement) => {
    setFilterState((prev) => ({...prev, [key]: e.value})) 
  }

  return <form  className={styles.filer_container}>
    <section className={styles.inputs_container}>
      <IconField value={username} iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText 
          className='p-inputtext-lg' 
          placeholder="Search" 
          onChange={(e) => {handleChange('username',e.target)}}
        />
      </IconField>
      <Dropdown 
        className="w-full md:w-14rem" 
        placeholder='Selecciona el estado'
        value={state}
        onChange={(e) => {handleChange('state',e)}}
        options={optEstado}
        checkmark
        showClear
      />
      <div>

          <Link
            href={`?${new URLSearchParams({
              username: username ?? '',
              state: state ?? ''
            })}`}
          >
            <IconButton iconClassname='pi pi-filter' withBackground />
          </Link>
        <IconButton onClick={(e) => {e.preventDefault()}} iconClassname='pi pi-sliders-v' withBackground/>
      </div>
    </section>
  </form>
}

export default Filter