import React, { useState } from 'react';
import { useIncomeContext } from '../../context/IncomeContext';
import IncomeScreen from './IncomeScreen';
import SelectFrequencyButton from '../../components/Elements/SelectFrequencyButton';
import TableReport from '../../components/Table/TableReport';

const IncomeDetails = () => {
	const { incomes } = useIncomeContext();
	const [userTotal, setUserTotal] = useState(incomes.totalIncome);

	const handleUserSelect = (event) => {
		let value;

		if (incomes.type === 'gross') value = incomes.gross[event.target.value];
		if (incomes.type === 'net') value = incomes.net[event.target.value];

		setUserTotal(value);
	};

	return (
		<section className="rounded-sm">
			<header className="flex flex-col gap-5 mb-8 sm:flex-row">
				<IncomeScreen userTotal={userTotal} type={incomes.type} />
				<SelectFrequencyButton handler={handleUserSelect} />
			</header>
			<main className="p-4 overflow-x-auto rounded-sm bg-calc-screenBg">
				<TableReport incomes={incomes} />
			</main>
		</section>
	);
};

export default IncomeDetails;
