import { ListItemProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const ListIcon = getComponent<ListItemProps>('ListIcon');

storiesOf('ListIcon', module)

	.add('Basic Example', () => (
		<ListIcon name="facebook-box" />
	))

	.add('Custom Size', () => (
		<ListIcon name="facebook-box" size={100} />
	));