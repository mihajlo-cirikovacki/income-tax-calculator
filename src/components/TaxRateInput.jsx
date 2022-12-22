import React from 'react';

const TaxRateInput = ({ label, register, errors }) => {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex gap-2 lg:self-end sm:self-start">
				<label htmlFor="taxRate" className="self-end">
					{label}
				</label>
				<input
					{...register('taxRate', { required: 'Tax Rate is required' })}
					type="number"
					id="taxRate"
					className="w-20 py-2 pl-4 font-bold tracking-tight rounded-lg appearance-none bg-calc-screenBg"
					placeholder="%"
				/>
			</div>
			{errors.taxRate && <p className="inputError">{errors.taxRate.message}</p>}
		</div>
	);
};

export default TaxRateInput;
