import React from 'react';
import { NavLink } from 'react-router-dom';
import { clsx as c } from 'clsx';

export const Nav = () => {
	return (
		<nav className="flex 2xl:w-1/2 xl:w-2/3 lg:w-5/6 sm:w-[98%] w-full">
			<ul className="flex gap-2 font-semibold">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => c({ 'text-red-400': isActive })}
					>
						<div className="px-6 rounded-t-lg 2xl:px-16 xl:px-12 lg:px-10 sm:px-8 bg-calc-folderBg">
							Income
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						NavLink
						to="/income-details"
						className={({ isActive }) => c({ 'text-red-400': isActive })}
					>
						<div className="px-6 rounded-t-lg 2xl:px-16 xl:px-12 lg:px-10 sm:px-8 bg-calc-folderBg">
							Details
						</div>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
