import { Tab, Tabs } from '@bluebase/components';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Simple Tabs', () => (
	<Tabs value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<Tab label="Item One" />
		<Tab label="Item Two" />
		<Tab label="Item Three" disabled />
	</Tabs>
))

.add('Icon Tabs', () => (
	<Tabs value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<Tab label="Item One" icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }} />
		<Tab label="Item Two" />
		<Tab label="Item Three" disabled />
	</Tabs>
))
;