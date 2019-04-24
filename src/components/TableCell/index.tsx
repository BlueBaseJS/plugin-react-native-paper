import { TableDefaultProps, TableProps } from '@bluebase/components';
import React from 'react';
import { DataTable } from 'react-native-paper';
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
