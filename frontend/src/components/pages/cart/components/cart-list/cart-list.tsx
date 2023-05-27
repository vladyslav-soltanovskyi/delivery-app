import { FC } from 'react'
import Heading from '@ui/heading/Heading';
import CartItem from './cart-item';
import { Button } from '@ui/form-elements';

import styles from './cart-list.module.scss'

interface ICartListProps {

}

const CartList: FC<ICartListProps> = () => {
  return (
    <div className={styles.cart__list}>
      <Heading
        title='Cart'
        className={styles.cart__list__title}
      />
      <div className={styles.cart__list__content}>
        {[1,2,4,5,67,7].map((_, i) => (
          <CartItem key={i} />
        ))}
      </div>
      <div className={styles.cart__footer}>
        <div className={styles.cart__footer__row}>

        </div>
        <div className={styles.cart__footer__row}>
          <p className="font-semibold">Total price: $999</p>
          <Button>Order</Button>
        </div>
      </div>
    </div>
  )
}

export default CartList;