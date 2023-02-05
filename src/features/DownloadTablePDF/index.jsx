import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { clsx as c } from 'clsx';

export const DownLoadPDF = ({
	tableTitle,
	tableHtmlID,
	label,
	icon,
	iconWidth = '35px',
	className,
}) => {
	const handleDownload = () => {
		const doc = new jsPDF();
		autoTable(doc, {
			html: tableHtmlID,
			headStyles: { fillColor: '#007a8a' },
		});
		doc.save(`${tableTitle}.pdf`);
	};

	return (
		<div className={c('flex', ' gap-2', 'items-center', className)}>
			<span className="text-sm">{label}</span>
			<button title="download" className="text-sm" onClick={handleDownload}>
				<img src={icon} alt={`Download ${tableTitle}`} width={iconWidth} />
			</button>
		</div>
	);
};
