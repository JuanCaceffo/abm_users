'use client'
//Libraries
import { FC, useState } from 'react'
import {
  PaginatorPageChangeEvent,
  Paginator as PrPaginator,
} from 'primereact/paginator'
import useClientNavigation from 'src/hooks/useClientNavigation'
//Custom hooks

//!Se hrcodea la cantidad de items ya que falta que la API devuelva la cantidad total de items que existen
const itemsLength = 1700

type pageT = {
  first: number
  rowsPerPage: number
}
//TODO: Updatear componente con datos de SearchParams
const Paginator: FC = () => {
  const { fullReplace, updateParams } = useClientNavigation()
  const [page, setPage] = useState<pageT>({ first: 0, rowsPerPage: 10 })

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setPage({ rowsPerPage: e.rows, first: e.first })

    console.log({
      page: (e.page + 1).toString(),
      limit: e.rows.toString(),
    })

    //Objeto con parametros de paginacion actualizados
    const params = updateParams({
      page: (e.page + 1).toString(),
      limit: e.rows.toString(),
    })
    //Remplazamos el historial con el nuevo path
    fullReplace({ scroll: true }, params)
  }

  return (
    <PrPaginator
      first={page.first}
      rows={page.rowsPerPage ? page.rowsPerPage : 10}
      totalRecords={itemsLength}
      rowsPerPageOptions={[10, 20, 30]}
      onPageChange={onPageChange}
    />
  )
}

export default Paginator
