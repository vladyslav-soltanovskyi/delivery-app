export interface ProductDto {
  id: string,
  title: string,
  description: string,
  poster: string,
  price: number,
  shopId: string,
  shop: {
    name: string
  }
}

export interface AllProductsDto {
	products: ProductDto[];
	count: number;
}