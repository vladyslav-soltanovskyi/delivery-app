import { PrismaClient, Product } from '@prisma/client';

type CreateProduct = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

class ProductService {
	private _dbClient: PrismaClient;

	constructor(dbClient: PrismaClient) {
		this._dbClient = dbClient;
	}

	public getAll(shopId?: string) {
		let optinos = {};

		if (typeof shopId !== 'string') {
			optinos = { where: { shopId } };
		}

		return this._dbClient.product.findMany(optinos);
	}

	public getById(id: string) {
		return this._dbClient.product.findFirst({
			where: {
				id,
			},
		});
	}

	public create(data: CreateProduct) {
		return this._dbClient.product.create({
			data: {
				title: data.title,
				poster: data.poster,
				description: data.description,
				price: data.price,
				shopId: data.shopId,
			},
		});
	}

	public update(id: string, data: Partial<Product>) {
		return this._dbClient.product.update({
			where: {
				id,
			},
			data: {
				title: data.title,
				poster: data.poster,
				description: data.description,
				price: data.price,
				shopId: data.shopId,
			},
		});
	}

	public delete(id: string) {
		return this._dbClient.product.delete({
			where: {
				id,
			},
		});
	}
}

export { ProductService };
