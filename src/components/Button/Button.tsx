import { Button as RNP_Button } from 'react-native-paper';
import { ButtonProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const Button = componentMapper<ButtonProps>(RNP_Button, {
	mode: 'variant',

	// TODO: fix color support
	// color: 'color',
	// disabled: 'disabled',
	// fullWidth: 'fullWidth',
	// size: 'size',
	// variant: 'variant',
}, {
	ignore: ['color'],
	rest: true,
});

