import { BottomNavigation, BottomNavigationAction } from '@bluebase/components';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('BottomNavigation', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Simple', () => (
	<BottomNavigation value={1} showLabels onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<BottomNavigationAction label="Item One" />
		<BottomNavigationAction label="Item Two" />
		<BottomNavigationAction label="Item Three" />
	</BottomNavigation>
))

.add('Icon', () => (
	<BottomNavigation value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<BottomNavigationAction
			label="Item One"
			icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }}
		/>
		<BottomNavigationAction
			label="Item Two"
			icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }}
		/>
		<BottomNavigationAction
			label="Item Three"
			icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }}
		/>
	</BottomNavigation>
))
;