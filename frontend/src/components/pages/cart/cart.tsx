import { FC } from 'react'
import Heading from '@ui/heading/heading';
import DeliveryForm from './components//delivery-form/delivery-form';
import CartList from './components/cart-list/cart-list';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OrderSchemaData, orderSchema } from '@validation/index'
import { useActions } from '@hooks/useActions';
import Meta from '@ui/meta/meta';

import styles from './cart.module.scss'

const Cart: FC = () => {
  const { clearInCart } = useActions();
  const { products, shopId } = useTypedSelector(({ cart }) => cart.cart);
  const { register, handleSubmit, formState:{ errors } } = useForm<OrderSchemaData>({
    resolver: yupResolver(orderSchema),
    mode: "onChange"
  });

  return (
    <Meta
      title="Shopping Cart"
      description="On this page you can order your selected items"
    >
      <div className={styles.cart}>
        <Heading title='Shopping Cart' />
        <div className={styles.content}>
          <DeliveryForm register={register} errors={errors} />
          <CartList
            products={products}
            createOrder={handleSubmit}
            shopId={shopId}
            clearInCart={clearInCart}
          />
        </div>
      </div>
    </Meta>
  )
}

export default Cart;