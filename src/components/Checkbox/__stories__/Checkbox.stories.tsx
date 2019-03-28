import React from 'react';
import { CheckboxProps } from '@bluebase/components';
// import { View } from 'react-native';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Checkbox = getComponent<CheckboxProps>('Checkbox');

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Color: undefined', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked D')}
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Color: Primary', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked D')}
			color="primary"
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="primary"
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="primary"
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="primary"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="primary"
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Color: Secondary', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked D')}
			color="secondary"
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="secondary"
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="secondary"
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="secondary"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="secondary"
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Color: Default', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked D')}
			color="default"
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="default"
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="default"
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="default"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="default"
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Color: Custom', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked D')}
			color="#9c27b0"
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="#9c27b0"
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="#9c27b0"
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="#9c27b0"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			color="#9c27b0"
			label="Checked (Disabled)"
			value
			disabled
		/>
	</View>
))

.add('Label Placement', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked D')}
			label="Undefined"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			label="bottom"
			labelPlacement="bottom"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			label="end"
			labelPlacement="end"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			label="start"
			labelPlacement="start"
			value
		/>
		<Checkbox
			onValueChange={action('Checked D')}
			label="top"
			labelPlacement="top"
			value
		/>
	</View>
))
;