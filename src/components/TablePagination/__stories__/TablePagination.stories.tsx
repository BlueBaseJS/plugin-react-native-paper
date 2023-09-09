/* eslint-disable react/jsx-no-bind */
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

import { TablePagination } from '../index';

const stories = storiesOf('TablePagination', module);

stories.add('TablePagination', () => (
	<TablePagination page={1} count={25} rowsPerPage={10} onPageChange={() => null} />
));
