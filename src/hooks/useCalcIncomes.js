import { useReducer } from 'react';
import {
	calculateGrossIncome,
	calculateNetIncome,
	calculateTax,
	convertIncomeFrequency,
} from '../utils';

const reducer = (state, income) => {
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

	return {
		...state,
		gross,
		net,
		tax,
		type: income.type,
		totalIncome: income.totalIncome,
		frequency: income.frequency,
	};
};

export const useCalcIncomes = () => {
	const [incomes, dispatch] = useReducer(reducer, {
		gross: null,
		net: null,
		tax: null,
		type: '',
		totalIncome: null,
		frequency: '',
	});

	return [incomes, dispatch];
};
