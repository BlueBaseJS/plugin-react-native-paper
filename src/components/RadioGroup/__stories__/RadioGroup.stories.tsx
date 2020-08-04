/* eslint-disable react/jsx-no-bind */
import { Radio, RadioGroup, RadioGroupProps } from '@bluebase/components';

import React from 'react';
import { action } from '@storybook/addon-actions';
import storiesOf from '@bluebase/storybook-addon';

class ControlledRadioGroup extends React.PureComponent<
	RadioGroupProps,
	{ value: RadioGroupProps['value'] }
> {
	static state: any = {
		value: 'option-b',
	};
	constructor(props: RadioGroupProps) {
		super(props);

		this.state = {
			value: this.props.value,
		};
	}

	render() {
		const handleChange = (value: any) => {
			this.setState({ value });
			action('Controlled RadioGroup')(value);
		};

		return (
			<RadioGroup onValueChange={handleChange} value={this.state.value}>
				{this.props.children}
			</RadioGroup>
		);
	}
}

const stories = storiesOf('RadioGroup', module);

stories.add('Uncontrolled', () => (
	<RadioGroup
		value="option-b"
		onValueChange={action('Uncontrolled RadioGroup')}
		label="Options"
		helperText="Chose any"
	>
		<Radio label="Option A" value="option-a" />
		<Radio label="Option B" value="option-b" />
		<Radio label="Option C" value="option-c" />
	</RadioGroup>
));

stories.add('Uncontrolled (Error)', () => (
	<RadioGroup
		value="option-b"
		error
		onValueChange={action('RadioGroup')}
		label="Options"
		helperText="Chose any"
	>
		<Radio label="Option A" value="option-a" />
		<Radio label="Option B" value="option-b" />
		<Radio label="Option C" value="option-c" />
	</RadioGroup>
));

stories.add('Controlled', () => (
	<ControlledRadioGroup value="option-c">
		<Radio label="Option A" value="option-a" />
		<Radio label="Option B" value="option-b" />
		<Radio label="Option C" value="option-c" />
	</ControlledRadioGroup>
));
