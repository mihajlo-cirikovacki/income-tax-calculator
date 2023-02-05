import React from 'react';
import { clsx as c } from 'clsx';

const Header = ({ title, logo, className }) => {
	return (
		<header
			className={c([
				'mt-5',
				'flex',
				'items-center',
				'gap-2',
				'font-bold',
				className,
			])}
		>
			<img src={logo} alt={title} width="50px" />
			<h1 className="text-2xl lg:text-4xl md:text-3xl">{title}</h1>
		</header>
	);
};

export default Header;
