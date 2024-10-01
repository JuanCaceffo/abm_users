import { FC } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { User } from 'src/models/User';
import styles from './userTable.module.css'

type userTableProps = {
  values: Array<User>
}

const UserTable: FC<userTableProps> = (
  {values}
) => {
  const columns = [
    {field: 'id',header: 'Id'},
    {field: 'usuario',header: 'Usuario'},
    {field: 'estado',header: 'Estado'},
    {field: 'sector',header: 'Sector'},
  ]

  const userData = values.map((user) => user.toJson)

  return <section className={styles.table_container}>
    <DataTable  value={userData} tableStyle={{ minWidth: '50rem' }}>
      {columns.map((col) => (
        <Column  
          className={`${styles.column} ${col.field == 'usuario' ? styles.user_col : ''}`}
          key={col.field} 
          field={col.field} 
          header={col.header} 
          sortable
        />
      ))}
    </DataTable>
  </section>
}

export default UserTable