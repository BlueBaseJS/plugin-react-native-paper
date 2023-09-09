import { DividerProps } from '@bluebase/components';
import { useTheme } from '@bluebase/core';
import React from 'react';
import { Divider as RNPDivider } from 'react-native-paper';

export const Divider = (props: DividerProps) => {
	const { theme } = useTheme();

	return (
		<RNPDivider
			{...props}
			style={[
				props.style,
				{
					backgroundColor: theme.palette.divider,
					height: 1,
				 },
			]}
		/>
	);
};
