import { DividerProps } from '@bluebase/components';
import MUIDivider from '@material-ui/core/Divider';
import { componentMapper } from '@bluebase/component-mapper';

export const Divider = componentMapper<DividerProps>(
	MUIDivider,
	{
		variant: ({ inset }: DividerProps) => inset === true ? 'inset' : 'fullWidth',
	},
	{ rest: true, ignore: ['inset'] }
);

