import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';
import { DataTable } from 'react-native-paper';
import React from 'react';

export const TablePagination = (props: TablePaginationProps) => {
	return (
		<DataTable.Pagination
			onPageChange={props.onPageChange as any}
			page={props.page as any}
			style={props.style as any}
			{...props}
		>
			{props.children}
		</DataTable.Pagination>
	);
};

TablePagination.defaultProps = TablePaginationDefaultProps;
