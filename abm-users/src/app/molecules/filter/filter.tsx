'use client'
// Libraries
// import Form from 'next/form'
import { FC } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
//Styles
import styles from './filter.module.css'
//Atoms
import IconButton from 'src/app/atoms/iconButton/iconButton';

const Filter: FC = () => {



  return <form  className={styles.filer_container}>
    <section className={styles.inputs_container}>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText className='p-inputtext-lg' placeholder="Search" />
      </IconField>
      <Dropdown className="w-full md:w-14rem" ></Dropdown>
      <Dropdown className="w-full md:w-14rem" ></Dropdown>
      <div>
        <IconButton iconClassname='pi pi-filter' withBackground/>
        <IconButton iconClassname='pi pi-sliders-v' withBackground/>
      </div>
    </section>
  </form>
}

export default Filter