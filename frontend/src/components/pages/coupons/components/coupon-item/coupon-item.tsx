import { FC } from 'react'
import CopyText from '@ui/form-elements/copy-text/copy-text'

import styles from './coupon-item.module.scss'

interface ICouponItemProps {

}

const CouponItem: FC<ICouponItemProps> = () => {
  return (
    <div className={styles.coupon}>
      <div className={styles.coupon__percent}>20% CHEAPER</div>
      <div className={styles.coupon__min__amount}>On orders over €88.21</div>
      <div className={styles.coupon__code}>Kod: PLQB2023052203</div>
      <div className={styles.coupon__info}>
        <li>22/05/2023 05:00 ~ 29/05/2023 04:59</li>
        <li>For all products</li>
      </div>
      <div className='flex flex-row-reverse'>
        <CopyText text="PLQB2023052203" />
      </div>
    </div>
  )
}

export default CouponItem;