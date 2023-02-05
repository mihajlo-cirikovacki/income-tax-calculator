import { useReducer } from 'react';
import { convertIncomeFrequency } from '@/utils/convertIncomeFrequency';
import { calcGrossIncome, calcNetIncome } from '@/utils/calcGrossNetIncomes';
import { calculateTax } from '@/utils/calculateTax';
import { INCOME_TYPES } from '@/constants';

export const incomeReducer = (state, income) => {
	let gross;
	let net;
	let tax;

	switch (income.type) {
		case INCOME_TYPES.gross:
			gross = convertIncomeFrequency(income.totalIncome, income.frequency);
			net = Object.fromEntries(
				Object.entries(gross).map(([key, value]) => [
					key,
					calcNetIncome(value, income.taxRate),
				])
			);
			tax = calculateTax(gross, net);
			break;
		case INCOME_TYPES.net:
			net = convertIncomeFrequency(income.totalIncome, income.frequency);
			gross = Object.fromEntries(
				Object.entries(net).map(([key, value]) => [
					key,
					calcGrossIncome(value, income.taxRate),
				])
			);
			tax = calculateTax(gross, net);
			break;
		default:
			console.error(`Unsupported type: ${income.type}`);
			return state;
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

export const useCalcIncomes = ({ reducer = incomeReducer } = {}) => {
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
