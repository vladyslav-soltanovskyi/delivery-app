import { ProductDto } from "./product";

export interface Cart {
  products: ProductCart[];
  shopId?: string;
} 

export interface ProductCart {
  product: ProductDto;
  qty: number;
}