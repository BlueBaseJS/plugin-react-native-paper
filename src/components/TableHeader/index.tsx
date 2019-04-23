import { TableDefaultProps, TableProps } from '@bluebase/components';
import React from 'react';
import { DataTable } from 'react-native-paper';
const TableHead = (props: TableProps) => {
	const { style, children } = props;
	return <DataTable.Header style={style as any}>{children}</DataTable.Header>;
};
TableHead.defaultProps = TableDefaultProps;
export { TableHead };
