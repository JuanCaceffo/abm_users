import UserTable from "./atoms/userTable/userTable";
import styles from "./page.module.css";
import { userService } from "src/services/UserService";

export default function Home() {
  return (
    <div className={styles.page}>
      <UserTable values={userService.getUserData()}/>
    </div>
  );
}
