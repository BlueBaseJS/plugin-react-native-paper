import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';

import { DataTable } from 'react-native-paper';
import React from 'react';

export const TablePagination = (props: TablePaginationProps) => {
	const { count, onPageChange, page, rowsPerPage } = props;

	const pages = Math.floor(count / rowsPerPage);
	const from = page * rowsPerPage;

	const max = (page + 1) * rowsPerPage;
	const to = max > count ? count : max;

	return (
		<DataTable.Pagination
			numberOfPages={pages}
			onPageChange={onPageChange}
			page={page}
			label={`${from + 1}-${to} of ${count}`}
		/>
	);
};

TablePagination.defaultProps = TablePaginationDefaultProps;
TablePagination.displayName = 'TablePagination';
