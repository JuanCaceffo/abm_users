'use client'
//Libraries
import { FC, useEffect, useState } from 'react'
import {
  PaginatorPageChangeEvent,
  Paginator as PrPaginator,
} from 'primereact/paginator'
//Custom hooks
import useClientNavigation from 'src/hooks/useClientNavigation'

//!Se hrcodea la cantidad de items ya que falta que la API devuelva la cantidad total de items que existen
const itemsLength = 110

type pageT = {
  first: number
  rowsPerPage: number
}

const Paginator: FC = () => {
  const { fullReplace, updateParams, readOnlySearchParams } =
    useClientNavigation()
  const [page, setPage] = useState<pageT>({ first: 0, rowsPerPage: 10 })

  //Actualizamos el estado del paginador si los search params de la url cambian
  useEffect(() => {
    const page = readOnlySearchParams.get('page')
    const rows = readOnlySearchParams.get('limit')

    if (page && rows) {
      const actualPage = +page - 1 //Le restamos 1 a la pagina por que comienza en 1
      setPage({
        first: actualPage * +rows, //Obtenemos el comienzo de la fila
        rowsPerPage: +rows, // indicamos la cantidad de rows que tenemos
      })
    }
  }, [readOnlySearchParams])

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    //Objeto con parametros de paginacion actualizados
    const params = updateParams({
      page: (e.page + 1).toString(), //Sumamos 1 a la pagina ya que comienza en 0
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
