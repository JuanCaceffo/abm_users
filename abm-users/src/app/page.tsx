//libraries
//domain
import { FC } from "react";
import { userService } from "src/services/UserService";
//types
import { stateT } from "src/types/filetTypes";
//components
import UserTable from "./atoms/userTable/userTable";
import Filter from "./molecules/filter/filter";
//styles
import styles from "./page.module.css";

type homeT = {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const Home: FC<homeT> = async ({
  searchParams
}) => {

  const userData = await userService.getAllUsers(
    searchParams.username as string,
    searchParams.state as stateT 
  )

  return (
    <main className={styles.page}>
      <header>
        <Filter/>
      </header>
      <section>
        <UserTable values={userData}/>
      </section>
    </main>
  )
}

export default Home