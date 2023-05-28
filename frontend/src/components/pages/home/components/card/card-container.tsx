import { FC } from "react";
import CardItem from "./card-item";
import { ProductDto } from "@types-app/product";
import Spinner from "@ui/spinner/spinner";

import styles from "./card.module.scss";

interface ICardContainerProps {
  products?: ProductDto[];
  isLoading: boolean;
}

const CardContainer: FC<ICardContainerProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!products?.length) {
    return <p>Products Not Found</p>;
  }

  return (
    <div className={styles.card__container}>
      {products.map((product) => (
        <CardItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CardContainer;
