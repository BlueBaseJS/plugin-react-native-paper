import { ButtonProps, DynamicIcon, IconProps } from '@bluebase/components';
import { ThemeConsumer, ThemeContextData } from '@bluebase/core';

import { Button as RNP_Button } from 'react-native-paper';
import React from 'react';

// import { componentMapper } from '@bluebase/component-mapper';

// export const Button = componentMapper<ButtonProps>(RNP_Button, {
// 	mode: 'variant',

// 	// TODO: fix color support
// 	// color: 'color',
// 	// disabled: 'disabled',
// 	// fullWidth: 'fullWidth',
// 	// size: 'size',
// 	// variant: 'variant',
// }, {
// 	ignore: ['color'],
// 	rest: true,
// });


const ButtonComponent = (props: ButtonProps) => (
	<ThemeConsumer>
		{({ theme }: ThemeContextData) => {

			const { children, color, title, variant, ...rest } = props;
			const rnpColor = (color === 'secondary') ? theme.palette.secondary.main : theme.palette.primary.main;

			let icon;

			if (props.icon) {
				const iconProps = props.icon;
				icon = ({ color: iColor, size }: IconProps) => (
					<DynamicIcon
						{...iconProps}
						color={iColor}
						size={size}
					/>
				);
			}
			return (
				<RNP_Button {...rest} icon={icon} mode={variant} color={rnpColor}>{children || title}</RNP_Button>
			);
		}}
	</ThemeConsumer>
);

export const Button = ButtonComponent;
// export const Button = React.memo(ButtonComponent);
