import { Order, PrismaClient } from '@prisma/client';

type CreateOrder = Omit<Order, 'id' | 'createdAt' | 'updatedAt'>;

class OrderService {
	private _dbClient: PrismaClient;

	constructor(dbClient: PrismaClient) {
		this._dbClient = dbClient;
	}

	public getAll() {
		return this._dbClient.order.findMany();
	}

	public getByPhoneAndEmail(phone: string, email: string) {
		return this._dbClient.order.findMany({
			where: {
				phone,
				email,
			},
		});
	}

	public create(data: CreateOrder) {
		return this._dbClient.order.create({
			data: {
				address: data.address,
				email: data.email,
				phone: data.phone,
				name: data.name,
				spent: data.spent,
				shopId: data.shopId,
				status: data.status,
			},
		});
	}

	public update(id: string, data: Partial<Order>) {
		return this._dbClient.order.update({
			where: {
				id,
			},
			data: {
				address: data.address,
				email: data.email,
				phone: data.phone,
				name: data.name,
				spent: data.spent,
				shopId: data.shopId,
				status: data.status,
			},
		});
	}

	public delete(id: string) {
		return this._dbClient.order.delete({
			where: {
				id,
			},
		});
	}
}

export { OrderService };
