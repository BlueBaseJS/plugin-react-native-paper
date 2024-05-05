import {
	DynamicIcon,
	MenuItemDefaultProps,
	MenuItemProps,
	Text,
	View
} from '@bluebase/components';
import { useTheme } from '@bluebase/core';
import React from 'react';
import { Menu as RNMenu } from 'react-native-paper';

export const MenuItem = (props: MenuItemProps) => {
	const { icon, title, ...rest } = props;
	const { theme } = useTheme();

	return (
		<RNMenu.Item
			{...rest}
			title={
				icon ? (
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<DynamicIcon
							size={20}
							color={theme.palette.text.secondary}
							{...icon}
						/>
						<View style={{ paddingStart: theme.spacing.unit, justifyContent: 'center' }}>
							<Text>{title}</Text>
						</View>
					</View>
				)
					: <Text>{title}</Text>
			}
		/>
	);
};

MenuItem.defaultProps = MenuItemDefaultProps;
