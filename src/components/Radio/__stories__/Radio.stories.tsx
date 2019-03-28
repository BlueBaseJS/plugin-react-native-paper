import { RadioProps } from '@bluebase/components';
import React from 'react';
// import { View } from 'react-native';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Radio = getComponent<RadioProps>('Radio');

const stories = storiesOf('Radio', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Color: undefined', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Radio
			onValueChange={action('Checked')}
		/>
		<Radio
			onValueChange={action('Checked')}
			label="Unchecked"
			value={false}
		/>
		<Radio
			onValueChange={action('Checked')}
			label="Checked"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			label="Unchecked (Disabled)"
			disabled
		/>
		<Radio
			onValueChange={action('Checked')}
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Color: Primary', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Radio
			onValueChange={action('Checked')}
			color="primary"
		/>
		<Radio
			onValueChange={action('Checked')}
			color="primary"
			label="Unchecked"
			value={false}
		/>
		<Radio
			onValueChange={action('Checked')}
			color="primary"
			label="Checked"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			color="primary"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Radio
			onValueChange={action('Checked')}
			color="primary"
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Color: Secondary', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Radio
			onValueChange={action('Checked')}
			color="secondary"
		/>
		<Radio
			onValueChange={action('Checked')}
			color="secondary"
			label="Unchecked"
			value={false}
		/>
		<Radio
			onValueChange={action('Checked')}
			color="secondary"
			label="Checked"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			color="secondary"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Radio
			onValueChange={action('Checked')}
			color="secondary"
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Color: Default', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Radio
			onValueChange={action('Checked')}
			color="default"
		/>
		<Radio
			onValueChange={action('Checked')}
			color="default"
			label="Unchecked"
			value={false}
		/>
		<Radio
			onValueChange={action('Checked')}
			color="default"
			label="Checked"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			color="default"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Radio
			onValueChange={action('Checked')}
			color="default"
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Color: Custom', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Radio
			onValueChange={action('Checked')}
			color="#9c27b0"
		/>
		<Radio
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Unchecked"
			value={false}
		/>
		<Radio
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Checked"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Radio
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Label Placement', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Radio
			onValueChange={action('Checked')}
			label="Undefined"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			label="bottom"
			labelPlacement="bottom"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			label="end"
			labelPlacement="end"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			label="start"
			labelPlacement="start"
			value
		/>
		<Radio
			onValueChange={action('Checked')}
			label="top"
			labelPlacement="top"
			value
		/>
	</View>
))
;