import { TableBodyDefaultProps, TableBodyProps } from '@bluebase/components';
import MuiTableBody from '@material-ui/core/TableBody';
import { componentMapper } from '@bluebase/component-mapper';

export const TableBody = componentMapper<TableBodyProps>(MuiTableBody, {
	children: ({ style, children }: TableBodyProps) => children ? children : style,
}, { rest: true, });

TableBody.defaultProps = TableBodyDefaultProps;