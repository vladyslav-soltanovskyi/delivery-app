import { FC } from 'react'
import { Button } from '@ui/form-elements';
import { MaterialIcon } from '@ui/icon/MaterialIcon';

import styles from './card.module.scss'

interface ICardItemProps {

}

const CardItem: FC<ICardItemProps> = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__media}>
        <img src="https://picsum.photos/600" alt="image" />
      </div>
      <div className={styles.card__content}>
        <h2 className={styles['card__content-title']}>title</h2>
        <p className={styles['card__content-description']} title={''}>Lorem ipsum sdf lk1423 dj-sa0 3241 jildvf description asdfhpoewqn sa0 3241 jildvf description asdfhpoewqn sa0 3241 jildvf description asdfhpoewqn</p>
        <div className={styles['card__content-footer']}>
          <div className={styles['card__content-footer-price']}>
            $265
          </div>
          <Button className={styles['card__content-footer-btn']}>
            <MaterialIcon name="MdOutlineShoppingCart" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardItem;