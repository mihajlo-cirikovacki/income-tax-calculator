export const convertIncomeFrequency = (income, frequency) => {
	// Convert income to annual
	let annually;

	switch (frequency) {
		case 'weekly':
			annually = income * 52;
			break;
		case 'fortnightly':
			annually = income * 26;
			break;
		case 'monthly':
			annually = income * 12;
			break;
		case 'annually':
			annually = income;
			break;
	}

	// Calculate equivalent income for other frequencies
	const weekly = annually / 52;
	const fortnightly = annually / 26;
	const monthly = annually / 12;

	return {
		weekly,
		fortnightly,
		monthly,
		annually,
	};
};
