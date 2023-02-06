import React from 'react';
import { clsx as c } from 'clsx';

export const TableBody = ({ children, className }) => {
	return (
		<tbody
			className={c([
				'divide-y',
				'divide-calc-tableBg',
				'text-xs md:text-sm',
				className,
			])}
		>
			{children}
		</tbody>
	);
};
