import { DialogContentProps, Text } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const DialogContent = getComponent<DialogContentProps>('DialogContent');

const stories = storiesOf('DialogContent', module);

stories

	.add('DialogContent with children props', () => (
		<React.Fragment>
			<DialogContent>
				<Text>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
					facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
					at eros.
					Praesent cmmodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
					lacus vel augue laoreet rutrum faucibus dolor auctor.
					Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
					scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
					auctor fringilla.
				</Text>

			</DialogContent >
		</React.Fragment >
	));