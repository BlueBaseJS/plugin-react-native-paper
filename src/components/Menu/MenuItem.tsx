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
				<Text style={{ flexDirection: 'row', justifyContent: 'center' }}>
					{icon ? (
						<View style={{ marginRight: theme.spacing.unit, marginBottom: -3 }}>
							<DynamicIcon
								size={20}
								color={theme.palette.text.secondary}
								{...icon}
							/>
						</View>
					) : null}
					<Text>{title}</Text>
				</Text>
			}
		/>
	);
};

MenuItem.defaultProps = MenuItemDefaultProps;
