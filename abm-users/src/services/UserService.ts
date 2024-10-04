import { UserData } from "src/types/userTypes"
import Service from "./config/service"
import { User } from "src/models/User"
import { pathsPrefix } from "./config/paths"
import { filterData } from "src/types/filetTypes"

class UserService extends Service{

  async getAllUsers(params: filterData = {}): Promise<User[]> {  
    const params_filter = {usuario:params.username , estado: params.state}

    const userData = (await this.httpClient.get<UserData[]>(`${pathsPrefix.user}`,{params:params_filter})).data
    return userData.map((userData) => (new User(userData)))
  }
}

export const userService = new UserService()