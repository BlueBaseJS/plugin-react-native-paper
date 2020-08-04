import React from 'react';
import { TableBody } from '@bluebase/components';
import { TableCell } from '../../TableCell';
import { TableHead } from '../index';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('TableHead', module);

stories.add('TableHead', () => (
	<TableHead>
		<TableBody>
			<TableCell>TableHead</TableCell>
		</TableBody>
	</TableHead>
));
