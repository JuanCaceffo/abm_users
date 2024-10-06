'use client'
//Libraires
import { FC, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
//Domain
import { User } from 'src/models/User'
//Styles
import styles from './userTable.module.css'
import UserDialog from 'src/app/Organisms/userDialog/userDialog'
import { UserData } from 'src/types/userTypes'

type userTableProps = {
  values: Array<UserData>
}

const UserTable: FC<userTableProps> = ({ values }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const columns = [
    { field: 'id', header: 'Id' },
    { field: 'usuario', header: 'Usuario' },
    { field: 'estado', header: 'Estado' },
    { field: 'sector', header: 'Sector' },
  ]

  return (
    <section className={styles.table_container}>
      <DataTable
        value={values}
        selectionMode={'single'}
        onRowClick={(e) => {
          setVisible(true)
        }}
        tableStyle={{ minWidth: '50rem' }}
      >
        {columns.map((col) => (
          <Column
            className={`${styles.column} ${
              col.field == 'usuario' ? styles.user_col : ''
            }`}
            key={col.field}
            field={col.field}
            header={col.header}
            sortable
          />
        ))}
      </DataTable>
      <UserDialog
        visible={visible}
        onHide={() => {
          if (!visible) return
          setVisible(false)
        }}
      />
    </section>
  )
}

export default UserTable
