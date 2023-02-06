import React from 'react';

export const RootLayout = ({ children }) => {
	return (
		<section className="flex flex-col items-center h-screen overflow-y-auto pt-5 leading-10 sm:pt-24 bg-calc-mainBg text-calc-textGray">
			{children}
		</section>
	);
};