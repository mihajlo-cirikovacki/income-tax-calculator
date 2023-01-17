import React, { createContext, useContext, useState } from 'react';

import {
	convertIncomeFrequency,
	calculateNetIncome,
	calculateGrossIncome,
	calculateTax,
} from '../utils';

const IncomeContext = createContext({
	handleIncomes: () => {},
	incomes: {},
});

export const useIncomeContext = () => useContext(IncomeContext);

export const IncomeContextProvider = ({ children }) => {
	const [incomes, setIncomes] = useState({});

	const handleIncomes = (income) => {
		let gross;
		let net;
		let tax;

		switch (income.type) {
			case 'gross':
				gross = convertIncomeFrequency(income.totalIncome, income.frequency);
				net = Object.fromEntries(
					Object.entries(gross).map(([key, value]) => [
						key,
						calculateNetIncome(value, income.taxRate),
					])
				);
				tax = calculateTax(gross, net);
				break;
			case 'net':
				net = convertIncomeFrequency(income.totalIncome, income.frequency);
				gross = Object.fromEntries(
					Object.entries(net).map(([key, value]) => [
						key,
						calculateGrossIncome(value, income.taxRate),
					])
				);
				tax = calculateTax(gross, net);
				break;
		}

		setIncomes({
			gross,
			net,
			tax,
			type: income.type,
			totalIncome: income.totalIncome,
			frequency: income.frequency,
		});
	};

	const incomesData = {
		handleIncomes,
		incomes,
	};

	return (
		<IncomeContext.Provider value={incomesData}>
			{children}
		</IncomeContext.Provider>
	);
};

export default IncomeContext;
