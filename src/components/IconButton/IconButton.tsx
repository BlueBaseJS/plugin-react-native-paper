import { Icon, IconButtonDefaultProps, IconButtonProps, IconProps } from '@bluebase/components';

import { IconButton as RNPIconButton } from 'react-native-paper';
import React from 'react';

export const IconButton = (props: IconButtonProps) => {

	const icon = ({ color, size }: IconProps) => (
		<Icon
			{...props}
			color={color}
			size={size}
			// style={[props.styles.root, props.style, { color }]}
		/>
	);
	return (
		<RNPIconButton icon={icon} {...props} />
	);
};

IconButton.defaultProps = IconButtonDefaultProps;

