export const calcGrossIncome = (income, taxRate) =>
	income + income * (taxRate / 100);

export const calcNetIncome = (income, taxRate) =>
	income - income * (taxRate / 100);
