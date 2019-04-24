import { TableDefaultProps, TableProps } from '@bluebase/components';
import { DataTable } from 'react-native-paper';

import React from 'react';

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
