import { Coupon, PrismaClient } from '@prisma/client';

type CreateCoupon = Omit<Coupon, 'id' | 'createdAt' | 'updatedAt'>;

class CouponService {
	private _dbClient: PrismaClient;

	constructor(dbClient: PrismaClient) {
		this._dbClient = dbClient;
	}

	public getAll() {
		return this._dbClient.coupon.findMany();
	}

	public getByCode(code: string) {
		return this._dbClient.coupon.findFirst({
			where: {
				code,
			},
		});
	}

	public create(data: CreateCoupon) {
		return this._dbClient.coupon.create({
			data: {
				code: data.code,
				amount: data.amount,
				isPercent: data.isPercent,
				shopId: data.shopId,
				dateStart: data.dateStart,
				dateEnd: data.dateEnd,
			},
		});
	}

	public update(id: string, data: Partial<Coupon>) {
		return this._dbClient.coupon.update({
			where: {
				id,
			},
			data: {
				code: data.code,
				amount: data.amount,
				isPercent: data.isPercent,
				shopId: data.shopId,
				dateStart: data.dateStart,
				dateEnd: data.dateEnd,
			},
		});
	}

	public delete(id: string) {
		return this._dbClient.coupon.delete({
			where: {
				id,
			},
		});
	}
}

export { CouponService };
