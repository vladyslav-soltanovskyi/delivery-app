import { Controllers } from '@controllers/index';
import { apiPath, wrap } from '@helpers/index';
import { ApiRoutes, CouponsApiRoutes } from '@enums/index';
import { Router } from 'express';

export const initCouponsRoutes = ({ couponController }: Controllers, path: ApiRoutes): Router => {
	const router = Router();

	router.get(apiPath(path, CouponsApiRoutes.COUPONS), wrap(couponController.getAll));

	router.get(apiPath(path, CouponsApiRoutes.CODE), wrap(couponController.getByCode));

	router.post(apiPath(path, CouponsApiRoutes.CREATE), wrap(couponController.create));

	router.put(apiPath(path, CouponsApiRoutes.EDIT_ID), wrap(couponController.update));

	router.delete(apiPath(path, CouponsApiRoutes.DELETE_ID), wrap(couponController.delete));

	return router;
};
