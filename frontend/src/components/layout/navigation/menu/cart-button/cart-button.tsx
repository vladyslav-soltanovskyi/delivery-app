import { MaterialIcon } from '@ui/icon/MaterialIcon'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { AppRoute } from '@enums/api'

import styles from './cart-button.module.scss'

interface ICartButtonProps {
}

const CartButton: FC<ICartButtonProps> = () => {
	return (
    <NavLink
      to={AppRoute.CART}
      className={styles.cart__button}
    >
      <MaterialIcon name="MdOutlineShoppingCart" />
      <span className={styles.cart__button__items}>5</span>
    </NavLink>
	)
}

export default CartButton