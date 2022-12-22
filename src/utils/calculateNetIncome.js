export const calculateNetIncome = (income, taxRate) =>
	income - income * (taxRate / 100);
