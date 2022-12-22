import React from 'react';

const GrossNetPicker = ({ label, register, errors }) => {
	return (
		<div className="flex flex-col gap-1 lg:self-end md:self-start">
			<div className="flex flex-col gap-2 sm:flex-row">
				<div className="flex gap-1 sm:self-end">
					<label htmlFor="type">{label}</label>
				</div>
				<div className="flex gap-3 sm:self-end">
					<div className="w-24 pt-1 transition duration-150 ease-in-out rounded-lg radio-btn bg-action-blue hover:bg-action-blueLight">
						<input
							{...register('type', { required: 'Type is required' })}
							type="radio"
							value="gross"
							id="gross"
							name="type"
						/>
						<label htmlFor="gross">Gross</label>
					</div>
					<div className="w-24 pt-1 transition duration-150 ease-in-out rounded-lg radio-btn bg-action-blue hover:bg-action-blueLight">
						<input
							{...register('type', { required: 'Type is required' })}
							type="radio"
							value="net"
							id="net"
							name="type"
						/>
						<label htmlFor="net">Net</label>
					</div>
				</div>
			</div>
			{errors.type && <p className="inputError">{errors.type.message}</p>}
		</div>
	);
};

export default GrossNetPicker;
