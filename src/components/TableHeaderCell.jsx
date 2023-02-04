import React from 'react';
import { clsx as c } from 'clsx';

const TableHeaderCell = ({ children, className }) => {
	return (
		<th
			className={c([
				'whitespace-nowrap',
				'px-2',
				'py-3',
				'first:pl-5',
				'last:pr-5',
				className,
			])}
		>
			<div className="font-semibold text-left">{children}</div>
		</th>
	);
};

export default TableHeaderCell;
