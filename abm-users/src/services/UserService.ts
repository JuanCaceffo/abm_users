import { UserData } from "src/types/userTypes"
import Service from "./config/service"
import { User } from "src/models/User"
import { pathsPrefix } from "./config/paths"

class UserService extends Service{
  
  async getAllUsers(): Promise<User[]> {  
    const userData = (await this.httpClient.get<UserData[]>(`${pathsPrefix.user}`)).data
    return userData.map((userData) => (new User(userData)))
  }
}

export const userService = new UserService()