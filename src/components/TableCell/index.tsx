import { TableCellDefaultProps, TableCellProps } from '@bluebase/components';
import MuiTableCell from '@material-ui/core/TableCell';
import { componentMapper } from '@bluebase/component-mapper';

export const TableCell = componentMapper<TableCellProps>(MuiTableCell, {
	children: ({ style, children }: TableCellProps) => children ? children : style,
}, { rest: true, });

TableCell.defaultProps = TableCellDefaultProps;