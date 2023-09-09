import { ListAvatarProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const ListAvatar = getComponent<ListAvatarProps>('ListAvatar');

storiesOf('ListAvatar', module)
	.add('Basic Example', () => <ListAvatar type="icon" color="white" icon="shield-key" />)

	.add('Custom Size', () => <ListAvatar type="icon" color="white" icon="shield-key" size={100} />);
