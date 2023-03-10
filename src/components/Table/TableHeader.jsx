import React from 'react';
import { clsx as c } from 'clsx';

export const TableHeader = ({ children, className }) => {
	return (
		<thead
			className={c([
				'rounded-sm',
				'bg-calc-tableBg',
				'text-xs',
				'font-semibold',
				'uppercase',
				'text-white',
				className,
			])}
		>
			<tr>{children}</tr>
		</thead>
	);
};
