import { ButtonProps } from '@bluebase/components';
import MUIButton from '@material-ui/core/Button';
import { componentMapper } from '@bluebase/component-mapper';

export const Button = componentMapper<ButtonProps>(MUIButton, {
	onClick: 'onPress',
	// children: 'children',
	// color: 'color',
	// disabled: 'disabled',
	// fullWidth: 'fullWidth',
	// size: 'size',
	// variant: 'variant',
}, { rest: true, });

