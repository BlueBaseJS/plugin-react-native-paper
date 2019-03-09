import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Divider = getComponent('Divider');

storiesOf('Divider', module)

.add('With default props', () => (
	<div style={{ padding: 20 }}><Divider /></div>
))

.add('inset set to true', () => (
	<div style={{ padding: 20 }}><Divider inset /></div>
));