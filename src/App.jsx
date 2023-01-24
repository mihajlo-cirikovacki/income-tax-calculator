import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { IncomeContextProvider } from './context/IncomeContext';
import SectionCalc from './components/Layout/SectionCalc';
import Nav from './components/Nav';
import TaxCalc from './components/TaxCalc';
import Form from './components/Form';
import IncomeDetails from './components/IncomeDetails';
import NotFound from './components/NotFound';

import './app.css';

function App() {
	return (
		<SectionCalc>
			<Nav />
			<TaxCalc>
				<IncomeContextProvider>
					<Routes>
						<Route path="/" element={<Form />} />
						<Route path="/income-details" element={<IncomeDetails />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</IncomeContextProvider>
			</TaxCalc>
		</SectionCalc>
	);
}

export default App;
