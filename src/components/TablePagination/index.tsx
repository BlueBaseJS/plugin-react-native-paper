import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';
import MuiTablePagination from '@material-ui/core/TablePagination';
import React from 'react';
export const TablePagination = (props: TablePaginationProps) => {
	const { style, children, ...rest } = props;
	return (
		<MuiTablePagination
			rowsPerPage={null as any}
			onChangePage={props.onPageChange as any}
			count={null as any}
			style={style as any}
			{...rest}
		>
			{children}
		</MuiTablePagination>
	);
};
TablePagination.defaultProps = TablePaginationDefaultProps;
