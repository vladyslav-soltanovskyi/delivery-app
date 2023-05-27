import { FC } from 'react'

import styles from './cart-list.module.scss'
import { Counter } from '@ui/form-elements';

interface ICartItemProps {

}

const CartItem: FC<ICartItemProps> = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__img}>
        <img src="https://picsum.photos/600" alt="image" />
      </div>
      <div className={styles.cart__content}>
        <div className={styles.cart__title}>Big double burger</div>
        <div className={styles.cart__body}>
          <div className={styles.cart__price}>$265</div>
            <Counter
              current={2}
              min={1}
              max={30}
              onChange={(n: number) => console.log(n)}
            />
          <div className={styles.cart__total}>$265</div>
        </div>
        <div className={styles.cart__actions}>
          <button className={styles.action}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;