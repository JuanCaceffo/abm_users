import { UserData } from 'src/types/userTypes'
import Service from './config/service'
import { pathsPrefix } from './config/paths'
import { stateT } from 'src/types/filetTypes'

class UserService extends Service {
  //TODO: Manejar mejor los parametros de filtrado
  async getAllUsers(
    username?: string,
    state?: stateT,
    page?: string,
    limit?: string
  ): Promise<UserData[]> {
    const params = {
      usuario: username ? username : undefined,
      estado: state ? state : undefined,
      _page: page ?? 1,
      _limit: limit,
    }

    return (
      await this.httpClient.get<UserData[]>(`${pathsPrefix.user}`, { params })
    ).data
  }

  async updateUser(user: UserData) {
    return this.httpClient.put<UserData>(`${pathsPrefix.user}/${user.id}`, user)
  }

  async createUser(user: UserData) {
    return this.httpClient.post<UserData>(`${pathsPrefix.user}`, user)
  }
}

export const userService = new UserService()
