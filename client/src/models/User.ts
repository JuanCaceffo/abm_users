import { UserData } from 'src/types/userTypes'

export class User {
  id: number
  username: string
  state: string
  sector: number
  constructor(props: UserData) {
    const { id, usuario, estado, sector } = props
    this.id = id
    this.username = usuario
    this.state = estado
    this.sector = sector
  }

  get toJson(): UserData {
    return {
      id: this.id,
      usuario: this.username,
      estado: this.state,
      sector: this.sector,
    }
  }

  capitalizedUserName() {
    return this.username.charAt(0).toUpperCase() + this.username.slice(1)
  }
}
