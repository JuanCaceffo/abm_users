import { userMockedData } from "src/mocks/userMock"
import { User } from "src/models/User"

class UserService {

  //TODO: agregar llamado a API
  getUserData(): Array<User> {  
    return userMockedData.map((userData) => (new User(userData)))
  }

}

export const userService = new UserService()