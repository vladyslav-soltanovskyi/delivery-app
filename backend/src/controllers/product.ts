import { Product } from '@prisma/client';
import { ProductService } from '@services/product';
import { TypedRequest, TypedRequestBody, TypedRequestQuery } from '@types-app/index';

type CreateProduct = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

class ProductController {
	private _productService: ProductService;
	
	constructor(productService: ProductService) {
		this._productService = productService;
	}

	public async getAll(req: TypedRequestBody<{ shopId?: string }>) {
		return await this._productService.getAll(req.body.shopId);
	}

	public async create(req: TypedRequestBody<CreateProduct>) {
		return await this._productService.create(req.body);
	}

	public async update(req: TypedRequest<{ id: string }, Partial<Product>>) {
		return await this._productService.update(req.query.id, req.body);
	}

	public async delete(req: TypedRequestQuery<{ id: string }>) {
		return await this._productService.delete(req.query.id);
	}
}

export { ProductController };
