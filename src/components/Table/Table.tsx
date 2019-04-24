import { TableDefaultProps, TableProps } from '@bluebase/components';
import { DataTable } from 'react-native-paper';

import React from 'react';
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
