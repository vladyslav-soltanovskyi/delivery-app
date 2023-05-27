import { FC } from "react";

interface IProductItemProps {}

const ProductItem: FC<IProductItemProps> = () => {
  return (
    <div className="flex items-center mt-2">
      <div className="w-8 h-8 flex-shrink-0 mr-2 sm:mr-3">
        <img
          className="rounded-full w-full h-full"
          src="https://bigburger.ch/bremgarten/wp-content/uploads/sites/7/2020/10/bigburger-bacon-prime.jpg"
          alt="Alex Shatov"
        />
      </div>
      <div className="font-medium text-gray-800">Big burger - $44 - 2</div>
    </div>
  );
};

export default ProductItem