import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/components/Layout/RootLayout';
import Nav from '@/components/Layout/Nav';
import MainLayout from '@/components/Layout/MainLayout';
import { Form } from '@/components/Form';
import IncomeDetails from '@/features/IncomesReport/IncomeDetails';

const App = () => {
	return (
		<RootLayout>
			<Nav />
			<MainLayout>
				<Outlet />
			</MainLayout>
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
