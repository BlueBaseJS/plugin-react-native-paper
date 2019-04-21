import { IconButtonDefaultProps, IconButtonProps } from '@bluebase/components';
import { IconButton as RNPIconButton } from 'react-native-paper';
import React from 'react';

export const IconButton = (props: IconButtonProps) => {
	return (
		<RNPIconButton icon={props.name as any}   {...props} />
	);
};

IconButton.defaultProps = IconButtonDefaultProps;

