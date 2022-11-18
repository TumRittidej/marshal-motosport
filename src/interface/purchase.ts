import { DeliveryType, DeliveryValue } from '@/constants/purchase'

export interface IPurchase {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  subDistrict: string
  district: string
  province: string
  postCode: string
  deliveryType: DeliveryType
  deliveryValue: DeliveryValue
  dateReceiveAtStore?: string
  timeReceiveAtStore?: string
}
