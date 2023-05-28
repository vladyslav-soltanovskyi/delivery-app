import { CouponsService } from '@services/coupons/coupons';
import { useQuery } from 'react-query';

export const useCoupons = () => {
	const { isLoading, data } = useQuery(
		'get coupons',
		() => CouponsService.getCoupons()
	);

	return {
    isLoading,
    coupons: data?.data
	}
}
