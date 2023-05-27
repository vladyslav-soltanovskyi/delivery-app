import { FC } from 'react'

import styles from './order-form.module.scss'
import { Button, Field } from '@ui/form-elements';
import Heading from '@ui/heading/Heading';

interface IOrderFormProps {

}

const OrderForm: FC<IOrderFormProps> = () => {
  return (
    <form className={styles.form}>
      <Heading title="Search Orders" />
      <Field
        placeholder='Email'
        className="mt-6"
      />
      <Field
        placeholder='Phone'
        className="mt-6"
      />
      <div className={styles.form__footer}>
        <Button>Search</Button>
      </div>
    </form>
  )
}

export default OrderForm;