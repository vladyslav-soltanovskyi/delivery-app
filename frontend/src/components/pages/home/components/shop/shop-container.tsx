import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ShopItem from "./shop-item";
import Spinner from "@ui/spinner/spinner";
import { Navigation } from "swiper";

import "swiper/css";
import { Shop } from "@types-app/shop";

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
  shops?: Shop[];
  isLoading: boolean;
  selectedShopId: string;
  handleChangeShopId: (id: string) => void;
}

const ShopContainer: FC<ShopContainerProps> = ({
  shops,
  isLoading,
  selectedShopId,
  handleChangeShopId,
}) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!shops?.length) {
    return <p>Shops Not Found</p>;
  }

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={breakpoints}
    >
      {shops.map((shop) => (
        <SwiperSlide key={shop.id}>
          <ShopItem
            selectedShopId={selectedShopId}
            handleChangeShopId={handleChangeShopId}
            {...shop}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShopContainer;
