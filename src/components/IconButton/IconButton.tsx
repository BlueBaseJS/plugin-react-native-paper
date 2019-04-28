import { Icon, IconButtonDefaultProps, IconButtonProps } from '@bluebase/components';
import { IconButton as RNPIconButton } from 'react-native-paper';
import React from 'react';

export const IconButton = (props: IconButtonProps) => {

	const icon = () => <Icon {...props} />;
	return (
		<RNPIconButton icon={icon} {...props} />
	);
};

IconButton.defaultProps = IconButtonDefaultProps;

