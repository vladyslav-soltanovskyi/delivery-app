import { AppRoute } from '@enums/api'
import { FC } from 'react'
import MenuItem from './menu-item'

import styles from './menu.module.scss'
import CartButton from './cart-button/cart-button'
// MdOutlineConfirmationNumber
const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<MenuItem
				name="Orders"
				path={AppRoute.ORDERS}
				iconName="MdOutlineHistory"
			/>
			<MenuItem
				name="Coupons"
				path={AppRoute.COUPONS}
				iconName="MdOutlineConfirmationNumber"
			/>
			<CartButton />
		</div>
	)
}

export default Menu