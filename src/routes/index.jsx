import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Form from '../components/Form';
import IncomeDetails from '../components/IncomeDetails';
import RootLayout from '../components/Layout/RootLayout';
import Nav from '../components/Nav';
import TaxCalc from '../components/TaxCalc';

const App = () => {
	return (
		<RootLayout>
			<Nav />
			<TaxCalc>
				<Outlet />
			</TaxCalc>
		</RootLayout>
	);
};

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				children: [
					{
						index: true,
						element: <Form />,
					},
					{
						path: '/income-details',
						element: <IncomeDetails />,
					},
				],
			},
			{ path: '*', element: <Navigate to="." /> },
		],
	},
]);
