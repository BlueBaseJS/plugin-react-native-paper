import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';
import { DataTable } from 'react-native-paper';
import React from 'react';
export const TablePagination = (props: TablePaginationProps) => {
	const { style, children, ...rest } = props;
	return (
		<DataTable.Pagination page={props.page} onPageChange={props.onPageChange as any} {...rest}>
			{children}
		</DataTable.Pagination>
	);
};
TablePagination.defaultProps = TablePaginationDefaultProps;
