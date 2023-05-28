import { ProductDto } from "@types-app/product";
import { FC } from "react";

interface IProductItemProps {
  product: ProductDto;
  qty: number;
}

const ProductItem: FC<IProductItemProps> = ({ product, qty }) => {
  return (
    <div className="flex items-center mt-2">
      <div className="w-8 h-8 flex-shrink-0 mr-2 sm:mr-3">
        <img
          className="rounded-full w-full h-full"
          src={product.poster}
          alt={product.title}
        />
      </div>
      <div className="font-medium text-gray-800">
        {product.title} - ${product.price} - {qty}
      </div>
    </div>
  );
};

export default ProductItem;
