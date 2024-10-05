//libraries
import { FC } from 'react'
//domain
import { userService } from 'src/services/UserService'
//types
import { stateT } from 'src/types/filetTypes'
//components
import UserTable from './atoms/userTable/userTable'
import Filter from './molecules/filter/filter'
import NewUser from './Organisms/newUser/newUser'
//styles
import styles from './page.module.css'

type homeT = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const Home: FC<homeT> = async ({ searchParams }) => {
  //Realizamos el request con el filtro obtenido por los parametros obtenidos desde la URL
  const userData = await userService.getAllUsers(
    searchParams.username as string,
    searchParams.state as stateT
  )

  return (
    <main className={styles.page}>
      <header className="w-full">
        <NewUser />
      </header>
      <Filter />
      <section>
        <UserTable values={userData} />
      </section>
    </main>
  )
}

export default Home
