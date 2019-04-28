import { TableDefaultProps, TableProps } from '@bluebase/components';
import { DataTable } from 'react-native-paper';

import React from 'react';
const TableHead = (props: TableProps) => {
	const { style, children } = props;
	return <DataTable.Header style={style as any}>{children}</DataTable.Header>;
};
TableHead.defaultProps = TableDefaultProps;
export { TableHead };
