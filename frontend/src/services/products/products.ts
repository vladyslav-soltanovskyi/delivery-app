import axios from '@services/api/axios'
import { AllProductsDto } from '@types-app/product';

export const ProductsService = {
	async getProducts(shopId?: string) {
		return axios.get<AllProductsDto>(`/products`, { params: { shopId: shopId } });
	},
}
