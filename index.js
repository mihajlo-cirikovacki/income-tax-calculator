import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './src/App';
import { IncomeContextProvider } from './src/context/IncomeContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<IncomeContextProvider>
			<StrictMode>
				<App />
			</StrictMode>
		</IncomeContextProvider>
	</BrowserRouter>
);
