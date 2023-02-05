import React from 'react';
import { clsx as c } from 'clsx';
import { FREQUENCY_TYPES } from '../../constants/constants';
import { useIncomeContext } from '../../context/IncomeContext';

const SelectFrequencyButton = ({ handler, className }) => {
	const { incomes } = useIncomeContext();

	return (
		<select
			onChange={handler}
			defaultValue={incomes.frequency}
			className={c([
				'self-start',
				'sm:self-center',
				'px-4',
				'py-2',
				'border-none',
				'rounded-lg',
				'bg-action-orange',
				'hover:bg-action-orangeLight',
				'cursor-pointer',
				'transition',
				'duration-150',
				'ease-in-out',
				className,
			])}
		>
			{FREQUENCY_TYPES.map((freqType) => (
				<option key={freqType} value={freqType}>
					{freqType.replace(freqType[0], freqType[0].toUpperCase())}
				</option>
			))}
		</select>
	);
};

export default SelectFrequencyButton;
