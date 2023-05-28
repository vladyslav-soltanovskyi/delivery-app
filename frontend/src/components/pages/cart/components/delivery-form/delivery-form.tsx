import { FC } from 'react'
import { Field } from '@ui/form-elements';
import Heading from '@ui/heading/heading';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import styles from './delivery-form.module.scss'
import { OrderSchemaData } from '@validation/index';

interface DeliveryFormProps {
  register: UseFormRegister<OrderSchemaData>;
  errors: FieldErrors<OrderSchemaData>
}


const DeliveryForm: FC<DeliveryFormProps> = ({
  register,
  errors
}) => {
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
          {...register("address")}
          error={errors.address}
        />
        <Field
          placeholder={'Email'}
          className="mt-6"
          {...register('email')}
          error={errors.email}
        />
        <Field
          placeholder={'Phone'}
          className="mt-6"
          {...register('phone')}
          error={errors.phone}
        />
        <Field
          placeholder={'Name'}
          className="mt-6"
          {...register('name')}
          error={errors.name}
        />
      </div>
    </div>
  )
}

export default DeliveryForm;