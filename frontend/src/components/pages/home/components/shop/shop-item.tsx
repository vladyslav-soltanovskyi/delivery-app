import { FC } from 'react'
import cn from 'clsx'

import styles from './shop.module.scss'

interface IShopItemProps {

}

const ShopItem: FC<IShopItemProps> = () => {
  const isActive = false;

  return (
    <div className={cn(styles.shop, {
      [styles.active]: isActive
    })}>
      <div className={styles.shop__name}>McDonalds</div>
      <div className={styles.shop__icon}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="McDonalds" />
      </div>
    </div>
  )
}

export default ShopItem;