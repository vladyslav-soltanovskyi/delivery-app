import { PrismaClient, Shop } from '@prisma/client';

type CreateShop = Omit<Shop, 'id' | 'createdAt' | 'updatedAt'>;

class ShopService {
	private _dbClient: PrismaClient;

	constructor(dbClient: PrismaClient) {
		this._dbClient = dbClient;
	}

	public getAll() {
		return this._dbClient.shop.findMany();
	}

	public create(data: CreateShop) {
		return this._dbClient.shop.create({
			data: {
				name: data.name,
				imageUrl: data.imageUrl,
				address: data.address,
			},
		});
	}

	public update(id: string, data: Partial<Shop>) {
		return this._dbClient.shop.update({
			where: {
				id,
			},
			data: {
				name: data.name,
				imageUrl: data.imageUrl,
				address: data.address,
			},
		});
	}

	public delete(id: string) {
		return this._dbClient.shop.delete({
			where: {
				id,
			},
		});
	}
}

export { ShopService };
