import { TableFooterDefaultProps, TableFooterProps } from '@bluebase/components';
import MuiTableFooter from '@material-ui/core/TableFooter';
import { componentMapper } from '@bluebase/component-mapper';

export const TableFooter = componentMapper<TableFooterProps>(MuiTableFooter, {
	children: ({ style, children }: TableFooterProps) => children ? children : style,
}, { rest: true, });

TableFooter.defaultProps = TableFooterDefaultProps;