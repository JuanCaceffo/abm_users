//libraries
import { FC } from 'react'
//domain
import { userService } from 'src/services/UserService'
//types
import { stateT } from 'src/types/filetTypes'
//components
import UserTable from './molecules/userTable/userTable'
import Filter from './molecules/filter/filter'
import NewUser from './molecules/newUser/newUser'
import Paginator from './atoms/paginator/Paginator'
//styles
import styles from './page.module.css'

type homeT = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const Home: FC<homeT> = async ({ searchParams }) => {
  //Realizamos el request con el filtro obtenido por los parametros obtenidos desde la URL
  const userData = await userService.getAllUsers(
    searchParams.username as string,
    searchParams.state as stateT,
    searchParams.page as string,
    searchParams.limit as string
  )

  return (
    <main className={`gap-3 ${styles.page}`}>
      <section className="flex flex-column gap-3">
        <header className="w-full">
          <NewUser />
        </header>
        <Filter />
        <section>
          <UserTable values={userData} />
        </section>
      </section>
      <footer className="align-self-end w-full">
        <Paginator />
      </footer>
    </main>
  )
}

export default Home
