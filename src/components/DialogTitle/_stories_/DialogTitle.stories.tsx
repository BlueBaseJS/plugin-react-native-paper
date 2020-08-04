import { DialogTitleProps } from '@bluebase/components';
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const DialogTitle = getComponent<DialogTitleProps>('DialogTitle');

const stories = storiesOf('DialogTitle', module);


stories

	.add('DialogTitle with children props', () => (
		<React.Fragment>
			<DialogTitle>
        Modal title
			</DialogTitle>
		</React.Fragment>
	));