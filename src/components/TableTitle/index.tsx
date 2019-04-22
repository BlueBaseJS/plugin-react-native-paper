import { TableTitleDefaultProps, TableTitleProps } from '@bluebase/components';
import MuiTableSortLabel from '@material-ui/core/TableSortLabel';
import { componentMapper } from '@bluebase/component-mapper';

export const TableRow = componentMapper<TableTitleProps>(MuiTableSortLabel, {
	children: ({ style, children }: TableTitleProps) => children ? children : style,
}, { rest: true, });

TableRow.defaultProps = TableTitleDefaultProps;