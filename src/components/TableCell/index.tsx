import { TableDefaultProps, TableProps } from '@bluebase/components';
import { DataTable } from 'react-native-paper';
import React from 'react';
const TableCell = (props: TableProps) => {
	const { style, children, ...rest } = props;
	return (
		<DataTable.Cell style={style as any} {...rest}>
			{children}
		</DataTable.Cell>
	);
};

TableCell.defaultProps = TableDefaultProps;
export { TableCell };
