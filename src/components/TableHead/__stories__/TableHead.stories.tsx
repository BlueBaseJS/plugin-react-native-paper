import React from 'react';
import { TableHead } from '../index';
import storiesOf from '@bluebase/storybook-addon';
import { TableCell } from '../../TableCell';
import { TableBody } from '@bluebase/components';

const stories = storiesOf('TableHead', module);

stories.add('TableHead', () => (
	<TableHead>
		<TableBody>
			<TableCell>TableHead</TableCell>
		</TableBody>
	</TableHead>
));
