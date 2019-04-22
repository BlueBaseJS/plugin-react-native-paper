import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';
import MuiTablePagination from '@material-ui/core/TablePagination';
import { componentMapper } from '@bluebase/component-mapper';

export const TablePagination = componentMapper<TablePaginationProps>(MuiTablePagination, {
	children: ({ style, children }: TablePaginationProps) => children ? children : style,
}, { rest: true, });

TablePagination.defaultProps = TablePaginationDefaultProps;