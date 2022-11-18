import { StaticImageData } from 'next/image'

export enum CartType {
  PLUS = 'plus',
  MINUS = 'minus',
}

export interface IProductCart {
  id: number
  image: StaticImageData
  name: string
  price: string
  amount: number
}
