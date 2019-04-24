import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';
import { DataTable } from 'react-native-paper';
import React from 'react';

export const TablePagination = (props: TablePaginationProps) => {
	const RowsPerPage = () => props.count / props.numberOfPages;

	return (
		<DataTable.Pagination
			rowsPerPage={RowsPerPage()}
			onChangePage={props.onPageChange as any}
			count={props.count as any}
			style={props.style as any}
			{...props}
		>
			{props.children}
		</DataTable.Pagination>
	);
};

TablePagination.defaultProps = TablePaginationDefaultProps;
