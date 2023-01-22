import React, { createContext, useContext } from 'react';
import { useCalcIncomes } from '../hooks/useCalcIncomes';

const IncomeContext = createContext({
	dispatch: () => {},
	incomes: {},
});

export const useIncomeContext = () => useContext(IncomeContext);

export const IncomeContextProvider = ({ children }) => {
	const [incomes, dispatch] = useCalcIncomes();

	return (
		<IncomeContext.Provider value={{ incomes, dispatch }}>
			{children}
		</IncomeContext.Provider>
	);
};

export default IncomeContext;
