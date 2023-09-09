import { TableDefaultProps, TableProps } from '@bluebase/components';
import React from 'react';
import { DataTable } from 'react-native-paper';

const TableRow = (props: TableProps) => {
	const { style, children, ...rest } = props;
	return (
		<DataTable.Row style={style as any} {...rest}>
			{children}
		</DataTable.Row>
	);
};

TableRow.defaultProps = TableDefaultProps;
export { TableRow };
