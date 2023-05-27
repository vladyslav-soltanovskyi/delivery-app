import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ShopItem from './shop-item';

import 'swiper/css';

const breakpoints = {
	577: {
		slidesPerView: 3,
		spaceBetween: 15,
	},
	769: {
		slidesPerView: 4,
		spaceBetween: 20,
	},
	1025: {
		slidesPerView: 5,
		spaceBetween: 10,
	},
	1200: {
		slidesPerView: 6,
		spaceBetween: 10,
	},
};

interface ShopContainerProps {
}

const ShopContainer: FC<ShopContainerProps> = () => {

	return (
    <Swiper
      modules={[Navigation]}
			slidesPerView={2}
			spaceBetween={10}
      breakpoints={breakpoints}
    >
      {[1,2,3,4,1,2,3,4,1,2,3,4].map((_, i) => (
				<SwiperSlide key={i}>
					<ShopItem />
				</SwiperSlide>
      ))}
    </Swiper>
	);
};

export default ShopContainer