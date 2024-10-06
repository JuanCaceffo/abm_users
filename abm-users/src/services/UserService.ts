import { UserData } from 'src/types/userTypes'
import Service from './config/service'
import { User } from 'src/models/User'
import { pathsPrefix } from './config/paths'
import { stateT } from 'src/types/filetTypes'

class UserService extends Service {
  //TODO: Manejar mejor los parametros de filtrado
  async getAllUsers(
    username?: string,
    state?: stateT,
    page?: string,
    limit?: string
  ): Promise<User[]> {
    const params = {
      usuario: username ? username : undefined,
      estado: state ? state : undefined,
      _page: page ?? 1,
      _limit: limit,
    }

    const userData = (
      await this.httpClient.get<UserData[]>(`${pathsPrefix.user}`, { params })
    ).data
    return userData.map((userData) => new User(userData))
  }
}

export const userService = new UserService()
