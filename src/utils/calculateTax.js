import { FREQUENCY_TYPES } from '@/constants';

export const calculateTax = (gross, net) => {
	const tax = {};

	FREQUENCY_TYPES.forEach((freqType) => {
		tax[freqType] = gross[freqType] - net[freqType];
	});

	return tax;
};
