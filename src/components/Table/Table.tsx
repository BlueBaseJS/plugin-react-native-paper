import { TableDefaultProps, TableProps } from '@bluebase/components';
import React from "react"
import MuiTable from '@material-ui/core/Table';


const Table = (props: TableProps) => {

	return (
		<MuiTable {...props}>
			{props.children}
		</MuiTable>
	);
};

Table.defaultProps = TableDefaultProps;