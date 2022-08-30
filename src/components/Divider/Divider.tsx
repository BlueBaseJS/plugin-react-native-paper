import { DividerProps } from '@bluebase/components';
import { Divider as RNPDivider } from 'react-native-paper';
import React from 'react';
import { useTheme } from '@bluebase/core';

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
