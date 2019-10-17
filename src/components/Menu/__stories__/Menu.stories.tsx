import { ButtonProps, MenuItemProps, MenuProps, View } from '@bluebase/components';

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const MenuItem = getComponent<MenuItemProps>('MenuItem');
const Menu = getComponent<MenuProps>('Menu');
const Button = getComponent<ButtonProps>('Button');

const stories = storiesOf('Menu', module);

stories.add('Menu complete story', () => (
	<View style={{ marginTop: 150 }}>
		<TestMenu />
	</View>
));

interface MenuStates {
	menuVisible: boolean;
	value: any;
}
const Data = [
	{ value: '1', label: 'Profile' },
	{ value: '2', label: 'My account' },
	{ value: '3', label: 'Logout' },
];
class TestMenu extends React.Component<any, MenuStates> {
	constructor(props: any) {
		super(props);
		this.state = { menuVisible: false, value: '' };
	}
	onDismiss = () => {
		this.setState({ menuVisible: !this.state.menuVisible });
	};
	onOpen = () => {
		this.setState({ menuVisible: !this.state.menuVisible });
	};
	setValue = (value: string) => {
		this.setState({ value, menuVisible: !this.state.menuVisible }, () =>
			console.log('after state set', this.state.value)
		);
	};
	render() {
		return (
			<Menu
				anchor={<Button title="Show Menu" onPress={this.onOpen} style={{ borderRadius: 20 }} />}
				visible={this.state.menuVisible}
				onDismiss={this.onDismiss}
			>
				{Data.map((item: any) => {
					return (
						<MenuItem
							key={item.value}
							title={item.label}
							onPress={() => this.setValue(item.value)}
						/>
					);
				})}
			</Menu>
		);
	}
}
