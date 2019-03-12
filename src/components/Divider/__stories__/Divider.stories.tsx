import React from 'react';
import { View } from 'react-native';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Divider = getComponent('Divider');

storiesOf('Divider', module)

.add('Default props', () => (
	<View style={{ padding: 20, width: 500 }}><Divider /></View>
))

.add('Inset', () => (
	<View style={{ padding: 20, width: 500 }}><Divider inset /></View>
));