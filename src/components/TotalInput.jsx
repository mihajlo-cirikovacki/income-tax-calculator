import React from 'react';

const TotalInput = ({ label, register, errors }) => {
	return (
		<div className="flex flex-col gap-4">
			<label htmlFor="totalIncome">{label}</label>
			<div className="flex flex-col gap-2">
				<div className="flex gap-5">
					<div className="relative md:w-[60%] sm:w-[70%] w-full">
						<input
							{...register('totalIncome', {
								required: 'Income is required',
								min: 0,
								max: Number.MAX_SAFE_INTEGER,
							})}
							placeholder="greater than zero"
							type="number"
							id="totalIncome"
							className="w-full pt-2 pb-2 pl-8 pr-0 font-bold tracking-tight rounded-lg appearance-none bg-calc-screenBg"
						/>
						<select
							{...register('frequency')}
							className="absolute top-0 bottom-0 right-0 self-center pl-2 transition duration-150 ease-in-out rounded-r-lg cursor-pointer bg-action-blue hover:bg-action-blueLight"
						>
							<option value="weekly">Weekly</option>
							<option value="fortnightly">Fortnightly</option>
							<option value="monthly">Monthly</option>
							<option value="annually">Annually</option>
						</select>
					</div>
				</div>
				{errors.totalIncome && (
					<p className="inputError">{errors.totalIncome.message}</p>
				)}
			</div>
		</div>
	);
};

export default TotalInput;
