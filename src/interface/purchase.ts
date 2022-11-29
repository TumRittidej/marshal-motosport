import {
  CustomerType,
  DeliveryType,
  DeliveryValue,
  PaymentType,
} from '@/constants/purchase'

export interface IPurchaseRequest {
  customerType: CustomerType
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  subDistrict: string
  district: string
  province: string
  postCode: string
  country?: string
  deliveryType: DeliveryType
  deliveryValue?: DeliveryValue
  dateReceiveAtStore?: string
  timeReceiveAtStore?: string

  paymentType: PaymentType
  cardHolderName?: string
  cardNumber?: number
  expirationDate?: string
  cvv?: number
}

export interface IPaymentBankRequest {
  fromBank: string
  toBank: string
  time: string
  uploadImage: string
}
