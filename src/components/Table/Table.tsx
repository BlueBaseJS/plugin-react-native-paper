import { TableDefaultProps, TableProps } from '@bluebase/components';
import MUIButton from '@material-ui/core/Button';
import { componentMapper } from '@bluebase/component-mapper';

export const Table = componentMapper<TableProps>(MUIButton, {
	children: ({ style, children }: TableProps) => children ? children : style,
	
}, { rest: true, });

Table.defaultProps = TableDefaultProps;