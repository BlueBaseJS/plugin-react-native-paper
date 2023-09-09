/* eslint-disable react/jsx-no-bind */
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('IconButton', module);

// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);
const IconButton = getComponent('IconButton');
stories
	.add('Contained IconButtons', () => (
		<React.Fragment>
			<IconButton
				onPress={() => {}}
				name="facebook"
				// size={20}
				// color="red"
			/>
			<IconButton
				onPress={() => {}}
				name="alarm"
				// size={20}
				// color="black"
			/>
			<IconButton
				onPress={() => {}}
				name="delete"
				// size={20}
				// color="black"
			/>
		</React.Fragment>
	))
	.add('Colors', () => (
		<React.Fragment>
			<IconButton onPress={() => {}} name="delete" size={20} color="black" />
			<IconButton onPress={() => {}} name="delete" size={20} color="red" />
			<IconButton onPress={() => {}} name="delete" size={20} color="blue" />
			<IconButton onPress={() => {}} name="delete" size={20} color="brown" />
		</React.Fragment>
	))
	.add('Sizes', () => (
		<React.Fragment>
			<IconButton onPress={() => {}} name="delete" size={10} color="black" />
			<IconButton onPress={() => {}} name="delete" size={20} color="black" />
			<IconButton onPress={() => {}} name="delete" size={30} color="black" />
			<IconButton onPress={() => {}} name="delete" size={40} color="black" />
			<IconButton onPress={() => {}} name="delete" size={50} color="black" />
			<IconButton onPress={() => {}} name="delete" size={60} color="black" />
			<IconButton onPress={() => {}} name="delete" size={70} color="black" />
		</React.Fragment>
	));
