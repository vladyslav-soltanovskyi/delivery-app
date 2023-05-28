import { AppRoute } from '@enums/route'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Logo: FC = () => {
	return (
		<NavLink to={AppRoute.HOME} className="block w-[100px]">
			Logo
		</NavLink>
	)
}

export default Logo
