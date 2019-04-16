import { ButtonProps, MenuItemProps, MenuProps, Text } from '@bluebase/components';
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const MenuItem = getComponent<MenuItemProps>('MenuItem');
const Menu = getComponent<MenuProps>('Menu');
const Button = getComponent<ButtonProps>('Button');

const stories = storiesOf('Menu', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('Menu complete story', () => (
		<React.Fragment>
			<SimpleMenu />
		</React.Fragment>
	))


	.add('Menu text story', () => (
		<React.Fragment>
			<MenuText />
		</React.Fragment>
	));





function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	function handleClick(event: any) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	return (
		<div>
			<Button
				aria-owns={anchorEl ? 'simple-menu' : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				Open Menu
</Button>
			<Menu style={{}} anchor={anchorEl} visible={Boolean(anchorEl)} onDismiss={handleClose}>
				<MenuItem title={'Profile'} onPress={handleClose} />
				<MenuItem title={'My account'} onPress={handleClose} />
				<MenuItem title={'Logout'} onPress={handleClose} />
			</Menu>
		</div>
	);
}






function MenuText() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	function handleClick(event: any) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	return (
		<div>
			<Button
				aria-owns={anchorEl ? 'simple-menu' : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				Open Menu
</Button>
			<Menu style={{}} anchor={anchorEl} visible={Boolean(anchorEl)} onDismiss={handleClose}>
				<MenuItem title={<Text>profile</Text> as any} onPress={handleClose} />
				<MenuItem title={<Text>my Account</Text> as any} onPress={handleClose} />
				<MenuItem title={<Text>Logout</Text> as any} onPress={handleClose} />
			</Menu>
		</div>
	);
}

export default SimpleMenu;