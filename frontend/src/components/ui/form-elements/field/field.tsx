import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import cn from 'clsx'

import styles from './field.module.scss'

interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type IField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, className, ...rest }, ref) => {
		return (
			<div className={cn(styles.field, className)} style={style}>
				<label>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
					/>
				</label>
				{error && <div className={styles.field__error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
