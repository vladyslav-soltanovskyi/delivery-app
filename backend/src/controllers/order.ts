import { Order } from '@prisma/client';
import { OrderService } from '@services/index';
import { TypedRequest, TypedRequestBody, TypedRequestQuery } from '@types-app/index';

type CreateOrder = Omit<Order, 'id' | 'createdAt' | 'updatedAt'>; // & { products: { productId: string, qty: number; }  }

class OrderController {
	private _orderService: OrderService;
	
	constructor(orderService: OrderService) {
		this._orderService = orderService;
	}

	public async getAll() {
		return await this._orderService.getAll();
	}

	public async getByPhoneAndEmail(req: TypedRequestBody<{ phone: string; email: string }>) {
		return await this._orderService.getByPhoneAndEmail(req.body.phone, req.body.email);
	}

	public async create(req: TypedRequestBody<CreateOrder>) {
		return await this._orderService.create(req.body);
	}

	public async update(req: TypedRequest<{ id: string }, Partial<Order>>) {
		return await this._orderService.update(req.query.id, req.body);
	}

	public async delete(req: TypedRequestQuery<{ id: string }>) {
		return await this._orderService.delete(req.query.id);
	}
}

export { OrderController };
