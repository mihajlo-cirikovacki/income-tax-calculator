import React from 'react';
import { clsx as c } from 'clsx';

const TableDataCell = ({ children, className }) => {
	return (
		<td
			className={c(
				'whitespace-nowrap px-2 py-4 first:pl-5 last:pr-5',
				className
			)}
		>
			<div>{children}</div>
		</td>
	);
};

export default TableDataCell;
