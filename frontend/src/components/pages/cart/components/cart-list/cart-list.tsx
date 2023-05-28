import { ChangeEvent, FC, useState, FormEvent } from "react";
import CartItem from "./cart-item";
import { Button, Field } from "@ui/form-elements";
import { ProductCart } from "@types-app/cart";
import { useCoupon } from "./hooks/useCoupon";
import Spinner from "@ui/spinner/spinner";
import Heading from "@ui/heading/heading";
import cn from "clsx";
import { UseFormHandleSubmit } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./cart-list.module.scss";
import { OrderSchemaData } from "@validation/index";
import { OrdersService } from "@services/orders/orders";
import { AppRoute } from "@enums/route";

interface ICartListProps {
  products: ProductCart[];
  createOrder: UseFormHandleSubmit<OrderSchemaData>;
  shopId?: string;
  clearInCart: () => void;
}

const CartList: FC<ICartListProps> = ({
  products,
  createOrder,
  shopId,
  clearInCart,
}) => {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const { coupon, isLoading, searchCode } = useCoupon(couponCode);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchCode();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCouponCode(e.target.value);

  const isUsedCoupon = !!coupon;
  const totalPrice = products?.reduce(
    (total, { qty, product }) => total + qty * product.price,
    0
  );

  const finishedPrice = totalPrice - (totalPrice * (coupon?.amount ?? 0)) / 100;

  const onCreateOrder = async (contactData: OrderSchemaData) => {
    setIsSending(true);
    try {
      await OrdersService.createOrder({
        ...contactData,
        spent: finishedPrice,
        shopId: shopId as string,
        products: products.map((p) => ({
          qty: p.qty,
          productId: p.product.id,
        })),
      });
      clearInCart();
      navigate(AppRoute.HOME);
    } catch (e) {
      console.log(e);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.cart__list}>
      <Heading title="Cart" className={styles.cart__list__title} />
      {!products?.length ? (
        <p>Empty Cart</p>
      ) : (
        <>
          <div className={styles.cart__list__content}>
            {products.map((product) => (
              <CartItem key={product.product.id} {...product} />
            ))}
          </div>
          <div className={styles.cart__footer}>
            <div className={styles.cart__footer__row}>
              <form className="flex" onSubmit={onSubmit}>
                <Field
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={onChange}
                />
                <Button className="ml-3">Check</Button>
                {isLoading && <Spinner />}
              </form>
            </div>
            <div className={styles.cart__footer__row}>
              <p className="font-semibold">
                Total price:
                <span
                  className={cn({ [styles.cart__used__coupon]: isUsedCoupon })}
                >
                  ${totalPrice}
                </span>
                {isUsedCoupon && <span>${finishedPrice}</span>}
              </p>
              <Button onClick={createOrder(onCreateOrder)} disabled={isSending}>
                Order
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
