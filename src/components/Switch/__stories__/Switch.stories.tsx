import React from 'react';
import { SwitchProps } from '@bluebase/components';
// import { View } from 'react-native';
// import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Switch = getComponent<SwitchProps>('Switch');

const stories = storiesOf('Switch', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Contained Switches', () => (
	<React.Fragment>
		<Switch
			// onChange={this.handleChange('checkedA')}
			value
		/>
		{/* <Switch
			checked={this.state.checkedB}
			onChange={this.handleChange('checkedB')}
			value="checkedB"
			color="primary"
		/>
		<Switch value="checkedC" />
		<Switch disabled value="checkedD" />
		<Switch disabled checked value="checkedE" />
		<Switch defaultChecked value="checkedF" color="default" /> */}
	</React.Fragment>
))
;