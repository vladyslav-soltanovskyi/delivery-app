import { FC } from "react";
import { Button } from "@ui/form-elements";
import { MaterialIcon } from "@ui/icon/MaterialIcon";
import { ProductDto } from "@types-app/product";

import styles from "./card.module.scss";
import { useInView } from "react-intersection-observer";
import { useTypedSelector } from "@hooks/useTypedSelector";
import { useActions } from "@hooks/useActions";

type ICardItemProps = ProductDto

const CardItem: FC<ICardItemProps> = (props) => {
  const { id, title, poster, description, price, shopId, shop } = props;
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { products, shopId: selectedShopIdInCart } = useTypedSelector(
    ({ cart }) => cart.cart
  );
  const { addProduct } = useActions();

  const isAdded = !!products?.some((product) => product.product.id === id);
  const isNotSelctedShopIdInCart = !!selectedShopIdInCart;
  const isSelectedShopIdInCart = shopId === selectedShopIdInCart;
  const onClick = () => addProduct(props);

  return (
    <div className={styles.card} ref={ref}>
      {inView ? (
        <div className={styles.card__media}>
          <img src={poster} alt={title} />
        </div>
      ) : (
        <div className={styles.card__media__skeleton}></div>
      )}
      <div className={styles.card__content}>
        <h2 className={styles["card__content-title"]}>{title}</h2>
        <p className={styles["card__content-description"]} title={description}>
          {description}
        </p>
        <p className={styles["card__content-company"]}>
          Company: <span>{shop.name}</span>
        </p>
        <div className={styles["card__content-footer"]}>
          <div className={styles["card__content-footer-price"]}>${price}</div>
          <Button
            className={styles["card__content-footer-btn"]}
            onClick={onClick}
            disabled={
              isAdded ||
              (!isAdded && !isSelectedShopIdInCart && isNotSelctedShopIdInCart)
            }
          >
            {isAdded && isSelectedShopIdInCart && (
              <MaterialIcon name="MdDone" />
            )}
            {!isAdded &&
              (!isNotSelctedShopIdInCart || isSelectedShopIdInCart) && (
                <MaterialIcon name="MdOutlineShoppingCart" />
              )}
            {isNotSelctedShopIdInCart &&
              !isAdded &&
              !isSelectedShopIdInCart && <MaterialIcon name="MdClose" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
