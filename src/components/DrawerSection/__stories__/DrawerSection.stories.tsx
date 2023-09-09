import { DrawerItem, DrawerSection } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import { action } from '@storybook/addon-actions';
import React from 'react';

const stories = storiesOf('DrawerSection', module);

stories.add('Default props', () => (
	<DrawerSection title="Drawer Section Header" />
));

stories.add('With Drawer Items', () => (
	<DrawerSection title="Drawer Section Header">
		<DrawerItem title="Item A" icon={{ name: 'facebook' }} onPress={action('drawer item press')} />
		<DrawerItem title="Item B" active onPress={action('drawer item press')} />
		<DrawerItem title="Item C" onPress={action('drawer item press')} />
	</DrawerSection>
));
