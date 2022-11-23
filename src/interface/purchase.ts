import { DeliveryType, DeliveryValue, PaymentType } from '@/constants/purchase'

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

  paymentType: PaymentType
  cardHolderName?: string
  cardNumber?: number
  expirationDate?: string
  cvv?: number
}