import { ThemeConsumer, ThemeContextData } from '@bluebase/core';

import { Button as BButton } from 'react-native-paper';
import { ButtonProps } from '@bluebase/components';
import React from 'react';

export const Button = (props: ButtonProps) => (
	<ThemeConsumer>
		{({ theme }: ThemeContextData) => {
			const { children, color, title, variant, icon, ...rest } = props;
			const rnpColor =
				color === 'primary' ||
				color === 'secondary' ||
				color === 'error' ||
				color === 'warning' ||
				color === 'success'
					? (theme.palette as any)[color].main
					: color;
			return (
				<BButton {...rest} mode={variant} color={rnpColor as any}>
					{children || title}
				</BButton>
			);
		}}
	</ThemeConsumer>
);
