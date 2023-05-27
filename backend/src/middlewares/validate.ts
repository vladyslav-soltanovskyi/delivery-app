import { NextFunction, Request, Response } from 'express';
import { AnyObject, ObjectSchema } from 'yup';

export const validateMiddleware =
	(objectSchema: ObjectSchema<AnyObject>) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const errors = await objectSchema.validate(req.body);

			if (errors) {
				return res.status(422).send(errors);
			}
			next();
		} catch (error) {
			return res.status(500).send({ status: false });
		}
	};
