import { Controllers } from '@controllers/index';
import { apiPath, wrap } from '@helpers/index';
import { ApiRoutes, ProductsApiRoutes } from '@enums/index';
import { Router } from 'express';

export const initProductsRoutes = ({ productController }: Controllers, path: ApiRoutes): Router => {
	const router = Router();

	router.get(apiPath(path, ProductsApiRoutes.PRODUCTS), wrap(productController.getAll));

	router.post(apiPath(path, ProductsApiRoutes.CREATE), wrap(productController.create));

	router.put(apiPath(path, ProductsApiRoutes.EDIT_ID), wrap(productController.update));

	router.delete(apiPath(path, ProductsApiRoutes.DELETE_ID), wrap(productController.delete));

	return router;
};
