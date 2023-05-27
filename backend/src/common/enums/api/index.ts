export enum ApiRoutes {
	COUPONS = '/coupons',
	SHOPS = '/shops',
	PRODUCTS = '/products',
	ORDERS = '/orders',
}

export enum CouponsApiRoutes {
	COUPONS = '/',
	CODE = '/code',
	CREATE = '/',
	EDIT_ID = '/:id',
	DELETE_ID = '/:id',
}

export enum ShopsApiRoutes {
	SHOPS = '/',
	CREATE = '/',
	EDIT_ID = '/:id',
	DELETE_ID = '/:id',
}

export enum ProductsApiRoutes {
	PRODUCTS = '/',
	CREATE = '/',
	EDIT_ID = '/:id',
	DELETE_ID = '/:id',
}

export enum OrdersApiRoutes {
	ORDERS = '/',
	PHONE_AND_EMAIL = '/phone-and-email',
	CREATE = '/',
	EDIT_ID = '/:id',
	DELETE_ID = '/:id',
}
