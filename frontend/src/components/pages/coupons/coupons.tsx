import { FC } from 'react'

import styles from './coupons.module.scss'
import CouponItem from './components/coupon-item/coupon-item';

interface ICouponsProps {

}

const Coupons: FC<ICouponsProps> = () => {
  return (
    <div className={styles.coupons}>
      {[1,2,3,4,5].map((_, i) => (
        <CouponItem key={i} />
      ))}
    </div>
  )
}

export default Coupons;