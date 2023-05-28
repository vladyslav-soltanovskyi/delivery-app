import { MaterialIcon } from '@ui/icon/MaterialIcon'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import type { TypeMaterialIconName } from '@types-app/icon'

import styles from './menu.module.scss'

interface IMenuItemProps {
  path: string;
  iconName: TypeMaterialIconName;
  name: string;
}

const MenuItem: FC<IMenuItemProps> = ({
  path,
  iconName,
  name
}) => {
	return (
    <NavLink
      to={path}
      className={styles.menu__item}
    >
      <span className={styles.menu__item__icon}>
        <MaterialIcon name={iconName} />
      </span>
      <span className={styles.menu__item__name}>{name}</span>
    </NavLink>
	)
}

export default MenuItem