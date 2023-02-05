import React from 'react';
import {
	FREQUENCY_TYPES,
	OPTIONS_TO_LOCALE_STRING,
	TABLE_HEADER,
} from '@/constants';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableBody from './TableBody';
import TableDataCell from './TableDataCell';

const TableReport = (props) => {
	const { gross, net, tax, totalIncome } = props.incomes;

	return (
		<table className="w-full" id="report-table">
			<TableHeader>
				{TABLE_HEADER.map((freq) => (
					<TableHeaderCell key={freq}>{freq}</TableHeaderCell>
				))}
			</TableHeader>
			<TableBody>
				{FREQUENCY_TYPES.map((freqType) => {
					const frequency = freqType.replace(
						freqType[0],
						freqType[0].toUpperCase()
					);

					return (
						<tr key={freqType}>
							<TableDataCell>{frequency}</TableDataCell>
							<TableDataCell>
								{totalIncome
									? gross[freqType].toLocaleString(
											'de-DE',
											OPTIONS_TO_LOCALE_STRING
									  )
									: 0}
							</TableDataCell>
							<TableDataCell>
								{totalIncome
									? tax[freqType].toLocaleString(
											'de-DE',
											OPTIONS_TO_LOCALE_STRING
									  )
									: 0}
							</TableDataCell>
							<TableDataCell>
								{totalIncome
									? net[freqType].toLocaleString(
											'de-DE',
											OPTIONS_TO_LOCALE_STRING
									  )
									: 0}
							</TableDataCell>
						</tr>
					);
				})}
			</TableBody>
		</table>
	);
};

export default TableReport;
