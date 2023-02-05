import React from 'react';

import Header from '../Layout/Header';
import logo from '../../../public/logo.svg';

const MainLayout = ({ children }) => {
	return (
		<section className="2xl:w-1/2 xl:w-2/3 lg:w-5/6 sm:w-[98%] sm:h-[85%] w-full h-full overflow-y-auto rounded-lg rounded-tl-none bg-calc-folderBg lg:px-6 lg:py-7 sm:px-4 sm:py-5 px-6 py-9 flex flex-col lg:gap-7 sm:gap-5">
			<Header title="Income tax calculator" logo={logo} />
			<main className="pt-10 pl-0 lg:pt-6 sm:pt-4 lg:text-lg text-sx">
				{children}
			</main>
		</section>
	);
};

export default MainLayout;
