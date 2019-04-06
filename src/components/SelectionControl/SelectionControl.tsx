import { StyleProp, ViewStyle } from 'react-native';
import { Text, View } from '@bluebase/components';
import { ThemeConsumer, ThemeContextData } from '@bluebase/core';
import React from 'react';

export interface SelectionControlProps {
	ControlComponent: React.ComponentType<any>;

	/**
	 * The text to be used in an enclosing label element.
	 */
	label?: React.ReactNode;

	/**
	 * The position of the label.
	 */
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';

	[key: string]: any;
}

export const SelectionControl = (props: SelectionControlProps) => {

	const { ControlComponent, label, labelPlacement, styles, ...rest } = props;

	const node = React.createElement(ControlComponent, {
		...rest,
		// style: [{ padding: 20, ...rest.style }],
	});

	if (!label) {
		return node;
	}

	const rootStyles: StyleProp<ViewStyle> = {
		flexDirection: 'row'
	};

	if (labelPlacement === 'end') {
		rootStyles.flexDirection = 'row-reverse';
	}

	if (labelPlacement === 'top') {
		rootStyles.flexDirection = 'column';
		rootStyles.justifyContent = 'center';
	}

	if (labelPlacement === 'bottom') {
		rootStyles.flexDirection = 'column-reverse';
		rootStyles.justifyContent = 'center';
	}

	return (
		<ThemeConsumer>
			{({ theme }: ThemeContextData) => (
				<View style={rootStyles}>
					{node}
					<Text style={[{ padding: theme.spacing.unit, }]}>{label}</Text>
				</View>
			)}
		</ThemeConsumer>
	);
};
