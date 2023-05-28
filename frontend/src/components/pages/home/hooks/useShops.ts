import { ShopsService } from '@services/shops/shops'
import { useState } from 'react'
import { useQuery } from 'react-query';

export const useShops = () => {
	const [selectedShopId, setSelectedShopId] = useState<string>()

	const { isLoading, data } = useQuery(
		'get shops',
		() => ShopsService.getShops()
	);

  const handleChangeShopId = (shopId: string) => setSelectedShopId(shopId);

	return {
    isShopsLoading: isLoading,
    shops: data?.data,
		selectedShopId,
		handleChangeShopId,
	}
}
