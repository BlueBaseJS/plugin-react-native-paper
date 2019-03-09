import { ListItemProps, ListSectionProps, ListSubheaderProps } from '@bluebase/components';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';

const ListItem = getComponent<ListItemProps>('ListItem');
const ListSection = getComponent<ListSectionProps>('ListSection');
const ListSubheader = getComponent<ListSubheaderProps>('ListSubheader');

const stories = storiesOf('ListSection', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default props', () => (
	<ListSection>Foo</ListSection>
));


stories.add('With List Items', () => (
	<ListSection>
		<ListSubheader>{text('Children', 'List Section Header')}</ListSubheader>
		<ListItem title="Item A" onPress={action('drawer-item-click')} />
		<ListItem title="Item B" onPress={action('drawer-item-click')} />
		<ListItem title="Item C" onPress={action('drawer-item-click')} />
	</ListSection>
));
