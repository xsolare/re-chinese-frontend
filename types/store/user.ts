export interface UserState {
  isLoggedIn: boolean
  userInfo: IUser
}

export interface IUser {
  id: number
  personaname: string
  lastlogoff: number
  profileurl: string
  avatar: string
  avatarmedium: string
  avatarfull: string
  realname: string
  timecreated: number
  loccountrycode: string
  created_at: Date
  updated_at: Date
}

export enum Role {
  USER = 'user',
  PREMIUM = 'premium',
  ADMIN = 'admin',
}
