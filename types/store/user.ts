export interface UserState {
  isLoggedIn: boolean
  userInfo: IUser
}

export interface IUser {
  id: number
  username: string
  avatar: string
  updatedAt: Date
  createdAt: Date
  lastLogin: Date
  roles: IRole[]
}

interface IRole {
  id: number
  name: RoleEnum
}

export enum RoleEnum {
  USER = "user",
  PREMIUM = "premium",
  ADMIN = "admin",
}
