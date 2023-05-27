import { FC } from 'react'
import Heading from '@ui/heading/Heading';
import DeliveryForm from './components//delivery-form/delivery-form';
import CartList from './components/cart-list/cart-list';

import styles from './cart.module.scss'

interface ICartProps {

}

const Cart: FC<ICartProps> = () => {
  return (
    <div className={styles.cart}>
      <Heading title='Shopping Cart' />
      <div className={styles.content}>
        <DeliveryForm />
        <CartList />
      </div>
    </div>
  )
}

export default Cart;