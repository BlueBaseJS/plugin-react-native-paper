import { TableDefaultProps, TableProps } from '@bluebase/components';
import React from 'react';
import { DataTable } from 'react-native-paper';
const Table = (props: TableProps) => {
	const { style, children, ...rest } = props;
	return (
		<DataTable style={style as any} {...rest}>
			{children}
		</DataTable>
	);
};

Table.defaultProps = TableDefaultProps;
export { Table };
