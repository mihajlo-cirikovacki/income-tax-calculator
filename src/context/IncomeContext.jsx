import React, { createContext, useContext } from 'react';
import { useCalcIncomes } from '@/hooks/useCalcIncomes';

const IncomeContext = createContext({
	dispatch: () => {},
	incomes: {},
});

IncomeContext.displayName = 'IncomeContext';

export const useIncomeContext = () => {
	const context = useContext(IncomeContext);

	if (context === undefined) {
		throw new Error(
			'useIncomeContext must be used within a IncomeContextProvider! 💥💥'
		);
	}

	return context;
};

export const IncomeContextProvider = ({ children }) => {
	const [incomes, dispatch] = useCalcIncomes();

	return (
		<IncomeContext.Provider value={{ incomes, dispatch }}>
			{children}
		</IncomeContext.Provider>
	);
};

export default IncomeContext;
