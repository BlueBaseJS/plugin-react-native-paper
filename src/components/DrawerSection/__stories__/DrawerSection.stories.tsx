import { DrawerItemProps, DrawerSectionProps } from '@bluebase/components';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';

const DrawerItem = getComponent<DrawerItemProps>('DrawerItem');
const DrawerSection = getComponent<DrawerSectionProps>('DrawerSection');

const stories = storiesOf('DrawerSection', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default props', () => (
	<DrawerSection title={text('Children', 'Drawer Section Header')} />
));


stories.add('With Drawer Items', () => (
	<DrawerSection title={text('Children', 'List Section Header')}>
		<DrawerItem title="Item A" onPress={action('drawer-item-click')} />
		<DrawerItem title="Item B" onPress={action('drawer-item-click')} />
		<DrawerItem title="Item C" onPress={action('drawer-item-click')} />
	</DrawerSection>
));
