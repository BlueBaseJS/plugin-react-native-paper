import { TableDefaultProps, TableProps } from '@bluebase/components';
import React from 'react';
import { DataTable } from 'react-native-paper';
const TableTitle = (props: TableProps) => {
	const { style, children, ...rest } = props;
	return (
		<DataTable.Title style={style as any} {...rest}>
			{children}
		</DataTable.Title>
	);
};

TableTitle.defaultProps = TableDefaultProps;
export { TableTitle };
