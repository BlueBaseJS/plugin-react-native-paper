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
			onValueChange={action('Checked')}
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="Checked (Disabled)"
			value
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="Unchecked (Indeterminate)"
			indeterminate
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="Checked (Indeterminate)"
			value
			indeterminate
		/>
	</View>
))

.add('Color: Primary', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked')}
			color="primary"
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="primary"
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="primary"
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="primary"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="primary"
			label="Checked (Disabled)"
			value
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="primary"
			label="Unchecked (Indeterminate)"
			indeterminate
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="primary"
			label="Checked (Indeterminate)"
			value
			indeterminate
		/>
	</View>
))

.add('Color: Secondary', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked')}
			color="secondary"
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="secondary"
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="secondary"
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="secondary"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="secondary"
			label="Checked (Disabled)"
			value
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="secondary"
			label="Unchecked (Indeterminate)"
			indeterminate
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="secondary"
			label="Checked (Indeterminate)"
			value
			indeterminate
		/>
	</View>
))

.add('Color: Default', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked')}
			color="default"
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="default"
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="default"
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="default"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="default"
			label="Checked (Disabled)"
			value
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="default"
			label="Unchecked (Indeterminate)"
			indeterminate
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="default"
			label="Checked (Indeterminate)"
			value
			indeterminate
		/>
	</View>
))

.add('Color: Custom', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked')}
			color="#9c27b0"
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Unchecked"
			value={false}
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Checked"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Unchecked (Disabled)"
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Checked (Disabled)"
			value
			disabled
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Unchecked (Indeterminate)"
			indeterminate
		/>
		<Checkbox
			onValueChange={action('Checked')}
			color="#9c27b0"
			label="Checked (Indeterminate)"
			value
			indeterminate
		/>
	</View>
))

.add('Label Placement', () => (
	<View style={{ paddingHorizontal: 20 }}>
		<Checkbox
			onValueChange={action('Checked')}
			label="Undefined"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="bottom"
			labelPlacement="bottom"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="end"
			labelPlacement="end"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="start"
			labelPlacement="start"
			value
		/>
		<Checkbox
			onValueChange={action('Checked')}
			label="top"
			labelPlacement="top"
			value
		/>
	</View>
))
;