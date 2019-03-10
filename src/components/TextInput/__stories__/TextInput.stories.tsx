import React from 'react';
import { TextInputProps } from '@bluebase/components';
// import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const TextInput = getComponent<TextInputProps>('TextInput');

const stories = storiesOf('TextInput', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('TextInputs', () => (
	<React.Fragment>
		<TextInput
			id="standard-name"
			label="Name"
			// value={text('value', 'Jon Doe')}
			// onChangeText={action('text input: ')}
		/>

		<TextInput
			id="standard-uncontrolled"
			label="Uncontrolled"
			defaultValue="foo"
		/>

		<TextInput
			required
			id="standard-required"
			label="Required"
			defaultValue="Hello World"
		/>

		<TextInput
			error
			id="standard-error"
			label="Error"
			defaultValue="Hello World"
		/>

		<TextInput
			disabled
			id="standard-disabled"
			label="Disabled"
			defaultValue="Hello World"
		/>

		<TextInput
			id="standard-password-input"
			label="Password"
			type="password"
			autoComplete="current-password"
		/>

		<TextInput
			id="standard-multiline-flexible"
			label="Multiline"
			multiline
			numberOfLines={4}
		/>

		<TextInput
			id="standard-multiline-static"
			label="Multiline"
			multiline
			numberOfLines={4}
			defaultValue="Default Value"
		/>

		<TextInput
			id="standard-helperText"
			label="Helper text"
			defaultValue="Default Value"
			helperText="Some important text"
		/>

		<TextInput
			id="standard-with-placeholder"
			label="With placeholder"
			placeholder="Placeholder"
		/>

		<TextInput
			id="standard-textarea"
			label="With placeholder multiline"
			placeholder="Placeholder"
			multiline
		/>

		<TextInput
			id="standard-number"
			label="Number"
			type="number"
		/>

		<TextInput
			id="standard-search"
			label="Search field"
			type="search"
		/>

	</React.Fragment>
));
