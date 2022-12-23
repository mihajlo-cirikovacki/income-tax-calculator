import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useIncomeContext } from '../context/IncomeContext';
import TotalInput from './TotalInput';
import TaxRateInput from './TaxRateInput';
import GrossNetPicker from './GrossNetPicker';

const Form = () => {
	const {
		register,
		formState: { errors },
		handleSubmit: submit,
	} = useForm();
	const { handleIncomes } = useIncomeContext();
	const navigate = useNavigate();

	const handleSubmit = (data) => {
		handleIncomes(data);
		navigate('/income-details');
	};

	return (
		<form
			className="flex flex-col gap-10 lg:gap-12 sm:gap-8"
			onSubmit={submit((data) => handleSubmit(data))}
		>
			<TotalInput
				label="What is your total income?"
				register={register}
				errors={errors}
			/>
			<div className="flex flex-col gap-8 lg:flex-row">
				<TaxRateInput
					label="...and tax rate ?"
					register={register}
					errors={errors}
				/>
				<GrossNetPicker
					label="dont't forget income type!"
					register={register}
					errors={errors}
				/>
			</div>
			<button
				type="submit"
				className="w-1/2 px-4 py-2 font-medium rounded-lg cursor-pointer sm:w-1/3 bg-action-orange hover:bg-action-orangeLight"
			>
				Calculate
			</button>
		</form>
	);
};

export default Form;
