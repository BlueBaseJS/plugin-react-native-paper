import { SliderProps, View } from '@bluebase/components';
import React from 'react';
import { Slider } from '../index';
// import { action } from '@storybook/addon-actions';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

class ControlledSlider extends React.Component<SliderProps> {
	state = {
		value: 50,
	};

	handleChange = (value: number) => {
		this.setState({ value });
	}

	render() {
		const { value } = this.state;

		return (
		<Slider
			value={value}
			onValueChange={this.handleChange}
			{...this.props}
		/>
		);
	}
}


const stories = storiesOf('Slider', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Controlled', () => (
	<View style={{ padding: 20 }}>
		<ControlledSlider step={5} />
	</View>
))

.add('Disabled', () => (
	<View style={{ padding: 20 }}>
		<Slider
			minimumValue={0}
			maximumValue={100}
			value={50}
			disabled
		/>
	</View>
))

;