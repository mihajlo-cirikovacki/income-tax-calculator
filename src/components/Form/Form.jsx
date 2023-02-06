import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { TaxRateInput } from './TaxRateInput';
import { TotalInput } from './TotalInput';
import { useIncomeContext } from '@/context/IncomeContext';
import { Button, GrossNetPicker } from '@/components/Elements';

export const Form = () => {
	const {
		register,
		formState: { errors },
		handleSubmit: submit,
	} = useForm();
	const { dispatch } = useIncomeContext();
	const navigate = useNavigate();

	return (
		<form
			className="flex flex-col gap-10 lg:gap-12 sm:gap-8"
			onSubmit={submit((data) => {
				dispatch(data);
				navigate('/income-details');
			})}
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
					label="don't forget income type!"
					register={register}
					errors={errors}
				/>
			</div>
			<Button type="submit">Calculate</Button>
		</form>
	);
};
