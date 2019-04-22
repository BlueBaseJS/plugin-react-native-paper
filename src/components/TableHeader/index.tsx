import { TableHeadDefaultProps, TableHeadProps } from '@bluebase/components';
import MuiTableFooter from '@material-ui/core/TableFooter';
import { componentMapper } from '@bluebase/component-mapper';

export const TableHead = componentMapper<TableHeadProps>(MuiTableFooter, {
	children: ({ style, children }: TableHeadProps) => children ? children : style,
}, { rest: true, });

TableHead.defaultProps = TableHeadDefaultProps;