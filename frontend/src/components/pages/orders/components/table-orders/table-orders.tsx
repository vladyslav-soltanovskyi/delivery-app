import { FC } from "react";
import cn from "clsx";
import ProductItem from "./components/product-item";

import styles from './table-orders.module.scss'

interface ITableOrdersProps {}

enum Status {
  CREATED = 'CREATED',
  PENDING = 'PENDING',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED'
}

type TTableStyles = keyof typeof styles;

const TableOrders: FC<ITableOrdersProps> = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          <th className={styles.table__header}>Products</th>
          <th className={styles.table__header}>Address</th>
          <th className={styles.table__header}>Spent</th>
          <th className={styles.table__header}>Date</th>
          <th className={styles.table__header}>Status</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        <tr>
          <td className={styles.table__ceil}>
            <ProductItem />
            <ProductItem />
          </td>
          <td className={styles.table__ceil}>
            alexshatov@gmail.com
          </td>
          <td className={styles.table__ceil}>
            <div className="text-left font-medium text-green-500">
              $2,890.66
            </div>
          </td>
          <td className={styles.table__ceil}>
            24.07.2022
          </td>
          
          <td className={styles.table__ceil}>
            <span className={cn(styles.status,
              styles[Status.CREATED.toLocaleLowerCase() as TTableStyles]
            )}>Created</span>
          </td>
        </tr>

      </tbody>
    </table>
  );
};

export default TableOrders;
