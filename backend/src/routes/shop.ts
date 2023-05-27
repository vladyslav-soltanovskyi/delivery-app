import { Controllers } from '@controllers/index';
import { apiPath, wrap } from '@helpers/index';
import { ApiRoutes, ShopsApiRoutes } from '@enums/index';
import { Router } from 'express';

export const initShopsRoutes = ({ shopController }: Controllers, path: ApiRoutes): Router => {
	const router = Router();

	router.get(apiPath(path, ShopsApiRoutes.SHOPS), wrap(shopController.getAll));

	router.post(apiPath(path, ShopsApiRoutes.CREATE), wrap(shopController.create));

	router.put(apiPath(path, ShopsApiRoutes.EDIT_ID), wrap(shopController.update));

	router.delete(apiPath(path, ShopsApiRoutes.DELETE_ID), wrap(shopController.delete));

	return router;
};
