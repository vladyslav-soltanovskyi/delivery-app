import { Controllers } from '@controllers/index';
import { apiPath, wrap } from '@helpers/index';
import { ApiRoutes, OrdersApiRoutes } from '@enums/index';
import { Router } from 'express';

export const initOrdersRoutes = ({ orderController }: Controllers, path: ApiRoutes): Router => {
	const router = Router();

	router.get(apiPath(path, OrdersApiRoutes.ORDERS), wrap(orderController.getAll));

	router.get(
		apiPath(path, OrdersApiRoutes.PHONE_AND_EMAIL),
		wrap(orderController.getByPhoneAndEmail),
	);

	router.post(apiPath(path, OrdersApiRoutes.CREATE), wrap(orderController.create));

	router.put(apiPath(path, OrdersApiRoutes.EDIT_ID), wrap(orderController.update));

	router.delete(apiPath(path, OrdersApiRoutes.DELETE_ID), wrap(orderController.delete));

	return router;
};
