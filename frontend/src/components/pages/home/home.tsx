import { FC } from 'react'
import CardContainer from './components/card/card-container'
import ShopContainer from './components/shop/shop-container'


import styles from './home.module.scss'
import Heading from '@ui/heading/Heading'

interface IHomeProps {

}

const Home: FC<IHomeProps> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.section}>
        <Heading title="Shops" className='pb-4' />
        <ShopContainer />
      </div>
      <div className={styles.section}>
        <Heading title="Goods (4)" className='pb-4' />
        <CardContainer />
      </div>
    </div>
  )
}

export default Home;