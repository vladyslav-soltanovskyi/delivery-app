import { FC } from "react";
import CardContainer from "./components/card/card-container";
import ShopContainer from "./components/shop/shop-container";
import Heading from "@ui/heading/heading";
import { useProducts } from "./hooks/useProducts";
import { useShops } from "./hooks/useShops";
import Meta from "@ui/meta/meta";

import styles from "./home.module.scss";

const Home: FC = () => {
  const { isShopsLoading, shops, selectedShopId, handleChangeShopId } =
    useShops();
  const { isProductsLoading, products, countProducts } =
    useProducts(selectedShopId);

  return (
    <Meta
      title="Home"
      description="On this page you can select products for your shopping cart"
    >
      <div className={styles.home}>
        <div className={styles.section}>
          <Heading title="Shops" className="pb-4" />
          <ShopContainer
            shops={shops}
            isLoading={isShopsLoading}
            selectedShopId={selectedShopId ?? ""}
            handleChangeShopId={handleChangeShopId}
          />
        </div>
        <div className={styles.section}>
          <Heading title={`Goods (${countProducts ?? 0})`} className="pb-4" />
          <CardContainer isLoading={isProductsLoading} products={products} />
        </div>
      </div>
    </Meta>
  );
};

export default Home;
