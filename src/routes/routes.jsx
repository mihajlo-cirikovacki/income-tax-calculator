import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { Form } from '@/components/Form';
import { RootLayout, Nav, MainLayout } from '@/components/Layout';
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
