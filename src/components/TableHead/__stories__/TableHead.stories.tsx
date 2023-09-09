import { TableBody } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

import { TableCell } from '../../TableCell';
import { TableHead } from '../index';

const stories = storiesOf('TableHead', module);

stories.add('TableHead', () => (
	<TableHead>
		<TableBody>
			<TableCell>TableHead</TableCell>
		</TableBody>
	</TableHead>
));
