import React from 'react';
import { TablePagination } from '../index';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('TablePagination', module);

stories.add('TablePagination', () => (
	<TablePagination count={1} page={2} numberOfPages={2} onPageChange={() => null}>
		{'TablePagination'}
	</TablePagination>
));
