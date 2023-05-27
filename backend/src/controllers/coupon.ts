import { Coupon } from '@prisma/client';
import { CouponService } from '@services/index';
import { TypedRequest, TypedRequestBody, TypedRequestQuery } from '@types-app/index';

type CreateCoupon = Omit<Coupon, 'id' | 'createdAt' | 'updatedAt'>;

class CouponController {
	private _couponService: CouponService;
	
	constructor(couponService: CouponService) {
		this._couponService = couponService;
	}

	public async getAll() {
		return await this._couponService.getAll();
	}

	public async getByCode(req: TypedRequestBody<{ code: string }>) {
		return await this._couponService.getByCode(req.body.code);
	}

	public async create(req: TypedRequestBody<CreateCoupon>) {
		return await this._couponService.create(req.body);
	}

	public async update(req: TypedRequest<{ id: string }, Partial<Coupon>>) {
		return await this._couponService.update(req.query.id, req.body);
	}

	public async delete(req: TypedRequestQuery<{ id: string }>) {
		return await this._couponService.delete(req.query.id);
	}
}

export { CouponController };
