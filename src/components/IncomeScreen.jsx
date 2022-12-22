import React from 'react';

import { OPTIONS_TO_LOCALE_STRING } from '../constants/constants';

const IncomeScreen = ({ userTotal, type }) => {
	return (
		<div className="w-full pt-4 pb-4 pl-5 pr-0 font-bold tracking-tight rounded-lg appearance-none sm:w-1/2 bg-calc-screenBg">
			<span className="mr-2">
				{userTotal
					? userTotal.toLocaleString('de-DE', OPTIONS_TO_LOCALE_STRING)
					: ''}
			</span>
			<span className="text-action-orange">{type?.toUpperCase()}</span>
		</div>
	);
};

export default IncomeScreen;
