import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { IncomeContextProvider } from '@/context/IncomeContext';
import { routes } from '@/routes/routes';

const ErrorFallback = () => {
	// TODO: Change these comp.
	return (
		<div
			className="text-red-500 w-sreen h-screen flex flex-col justify-center items-center"
			role="alert"
		>
			<h2 className="text-lg font-semibold">
				Ooops, something went wrong 💥🌋{' '}
			</h2>
			<button
				className="mt-4"
				onClick={() => window.location.assign(window.location.origin)}
			>
				Refresh
			</button>
		</div>
	);
};

export const AppProvider = () => {
	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<IncomeContextProvider>
				<RouterProvider router={routes} />
			</IncomeContextProvider>
		</ErrorBoundary>
	);
};
