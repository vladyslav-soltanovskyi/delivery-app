import { FC } from 'react'
import CardItem from './card-item';

import styles from './card.module.scss'

interface ICardContainerProps {

}
// MdOutlineShoppingCart
const CardContainer: FC<ICardContainerProps> = () => {
  return (
    <div className={styles.card__container}>
      {[1,2,3,4,1,2,3,4,1,2,3,4].map((_, i) => (
        <CardItem key={i} />
      ))}
    </div>
  )
}

export default CardContainer;