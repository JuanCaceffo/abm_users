import { FC } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cookies } from 'next/headers';
// import styles from './userTable.module.css'



const UserTable: FC = () => {

  const columns = [
    {field: 'id',header: 'Id'},
    {field: 'user',header: 'Usuario'},
    {field: 'state',header: 'Estado'},
    {field: 'sector',header: 'Sector'},
  ]

  return <>
    <DataTable value={[{'id': 'juan'}]}>
      {columns.map((col) => (
        <Column key={col.field} field={col.field} header={col.header}></Column>
      ))}
    </DataTable>
  </>
}

export default UserTable