import { ListIcon, ListItemProps, Switch, ListAvatar } from '@bluebase/components';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withKnobs } from '@storybook/addon-knobs';

const ListItem = getComponent<ListItemProps>('ListItem');

const stories = storiesOf('ListItem', module);

// stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default props', () => (
	<ListItem title="Item 1" />
));

stories.add('With Left Icon & Right', () => (
	<ListItem
		title="Item 1"
		description="Jan 9, 2014"
		left={<ListIcon name="inbox" />}
		right={<Switch />}
	/>
));

stories.add('RTL', () => (
	<div dir="rtl">
		<ListItem
			title="Item 1"
			description="Jan 9, 2014"
			left={<ListIcon name="inbox" />}
			right={<Switch />}
		/>
	</div>

));

stories.add('With Left Avatar & Right', () => (
	<ListItem
		title="Item 1"
		left={<ListAvatar type="image" image={{ uri: 'https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg' }} />}
		right={<Switch />}
	/>
));

stories.add('onPress listener', () => (
	<ListItem title="Click Me" onPress={action('drawer-item-click')} />
));

stories.add('Active', () => (
	<ListItem title="Click Me" selected />
));

stories.add('Disabled', () => (
	<ListItem title="Click Me" onPress={action('drawer-item-click')} disabled />
));
