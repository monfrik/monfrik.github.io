import { Product } from "../../main/shared/Product";

export class OrderProduct extends Product {
  public id: number
  public name: string
  public img: string
  public price: number
  public count: number
  public dateOfAdoption: string
}