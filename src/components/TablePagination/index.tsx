import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';

import { DataTable } from 'react-native-paper';
import React from 'react';

export const TablePagination = (props: TablePaginationProps) => {
	return <DataTable.Pagination {...props}>{props.children}</DataTable.Pagination>;
};

TablePagination.defaultProps = TablePaginationDefaultProps;
