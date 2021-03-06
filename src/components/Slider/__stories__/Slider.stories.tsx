import React from 'react';
import { Slider } from '../Slider';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import { storiesOf } from '@storybook/react-native';

storiesOf('Slider', module).add('default', () => (
	<View>
		<Slider
			style={{ width: 200, height: 40 }}
			minimumValue={0}
			maximumValue={1}
			minimumTrackTintColor="#FFFFFF"
			maximumTrackTintColor="#000000"
		/>
	</View>
));
