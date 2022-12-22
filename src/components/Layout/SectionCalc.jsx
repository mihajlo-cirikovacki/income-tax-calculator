import React from 'react';

const SectionCalc = ({ children }) => {
	return (
		<section className="flex flex-col items-center h-screen pt-5 leading-10 sm:pt-24 bg-calc-mainBg text-calc-textGray">
			{children}
		</section>
	);
};

export default SectionCalc;
