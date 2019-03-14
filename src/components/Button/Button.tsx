import { ButtonProps, Text } from '@bluebase/components';
import MUIButton from '@material-ui/core/Button';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const Button = componentMapper<ButtonProps>(MUIButton, {
	children: ({ title, children }: ButtonProps) => children ? children: <Text>{title}</Text>,
	onClick: 'onPress',
}, { rest: true, });

