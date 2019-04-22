import { TableRowDefaultProps, TableRowProps } from '@bluebase/components';
import MuiTableRow from '@material-ui/core/TableRow';
import { componentMapper } from '@bluebase/component-mapper';

export const TableRow = componentMapper<TableRowProps>(MuiTableRow, {
	children: ({ style, children }: TableRowProps) => children ? children : style,
}, { rest: true, });

TableRow.defaultProps = TableRowDefaultProps;