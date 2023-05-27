import { Shop } from '@prisma/client';
import type { ShopService } from '@services/index';
import { TypedRequest, TypedRequestBody, TypedRequestQuery } from '@types-app/index';

type CreateShop = Omit<Shop, 'id' | 'createdAt' | 'updatedAt'>;

class ShopController {
	private _shopService: ShopService;
	
	constructor(shopService: ShopService) {
		this._shopService = shopService;
	}
	
	public async getAll() {
		return await this._shopService.getAll();
	}

	public async create(req: TypedRequestBody<CreateShop>) {
		return await this._shopService.create(req.body);
	}

	public async update(req: TypedRequest<{ id: string }, Partial<Shop>>) {
		return await this._shopService.update(req.query.id, req.body);
	}

	public async delete(req: TypedRequestQuery<{ id: string }>) {
		return await this._shopService.delete(req.query.id);
	}
}

export { ShopController };
