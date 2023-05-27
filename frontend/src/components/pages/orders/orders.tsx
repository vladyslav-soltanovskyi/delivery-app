import { FC } from 'react'

import styles from './orders.module.scss'
import TableOrders from './components/table-orders/table-orders';
import OrderForm from './components/order-form/order-form';

interface IOrdersProps {

}

const Orders: FC<IOrdersProps> = () => {
  return (
    <div className={styles.orders}>
      <OrderForm />
      <TableOrders />
    </div>
  )
}

export default Orders;