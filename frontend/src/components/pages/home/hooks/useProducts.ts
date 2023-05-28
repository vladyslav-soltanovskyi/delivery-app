import { ProductsService } from '@services/products/products'
import { useQuery } from 'react-query'

export const useProducts = (shopId?: string) => {
	const { isLoading, data, refetch } = useQuery(
		['get products', shopId],
		() => ProductsService.getProducts(shopId)
	)

	return {
		isProductsLoading: isLoading,
		products: data?.data.products,
		countProducts: data?.data.count,
		refetchProducts: refetch
	}
}
