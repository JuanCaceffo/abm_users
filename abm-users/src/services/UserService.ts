import { userMockedData } from "src/mocks/userMock"
import { User } from "src/models/User"

export const userService = () => {

  //TODO: agregar llamado a API
  const getUserData: () => Array<User> = () => {
    return userMockedData.map((userData) => (new User(userData)))
  }

  return {
    getUserData
  }
}

