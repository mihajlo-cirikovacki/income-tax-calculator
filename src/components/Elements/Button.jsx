import React from 'react';
import { clsx as c } from 'clsx';

export const Button = ({ children, className, ...rest }) => {
	return (
		<button
			className={c([
				'w-1/2',
				'sm:w-1/3 ',
				'px-4',
				'py-2',
				'font-medium',
				'rounded-lg',
				'cursor-pointer',
				'bg-action-orange',
				'hover:bg-action-orangeLight',
				className,
			])}
			{...rest}
		>
			{children}
		</button>
	);
};
