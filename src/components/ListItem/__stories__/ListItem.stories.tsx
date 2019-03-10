import { ListItemProps } from '@bluebase/components';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// import { withInfo } from '@storybook/addon-info';
import { Text } from 'react-native';
import { withKnobs } from '@storybook/addon-knobs';

const ListItem = getComponent<ListItemProps>('ListItem');

const stories = storiesOf('ListItem', module);

// stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default props', () => (
	<ListItem title="Item 1" />
));

stories.add('With Left Element & Right', () => (
	<ListItem title="Item 1" left={<Text>L</Text>} right={<Text>R</Text>} />
));

stories.add('onPress listener', () => (
	<ListItem title="Click Me" onPress={action('drawer-item-click')} />
));

stories.add('Active', () => (
	<ListItem title="Click Me" active />
));

stories.add('Disabled', () => (
	<ListItem title="Click Me" onPress={action('drawer-item-click')} disabled />
));
