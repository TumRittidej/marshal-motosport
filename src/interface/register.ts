import { RegisterType } from '@/constants/register'

export interface IRegisterRequest {
  type: RegisterType
  storeName?: string
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}
