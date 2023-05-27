import { FC } from 'react'
import { Field } from '@ui/form-elements';
import Heading from '@ui/heading/Heading';

import styles from './delivery-form.module.scss'

interface IShippingFormProps {

}

const ShippingForm: FC<IShippingFormProps> = () => {
  return (
    <div className={styles.form}>
      <Heading
        title='Delivery form'
        className={styles.form__title}
      />
      <div className={styles.form__fields}>
        <Field
          placeholder={'Address'}
          className="mt-6"
        />
        <Field
          placeholder={'Email'}
          className="mt-6"
        />
        <Field
          placeholder={'Phone'}
          className="mt-6"
        />
        <Field
          placeholder={'Name'}
          className="mt-6"
        />
      </div>
    </div>
  )
}

export default ShippingForm;