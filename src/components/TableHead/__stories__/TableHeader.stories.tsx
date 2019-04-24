import React from 'react';
import { TableHead } from '../index';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('TableHead', module);

stories.add('TableHead', () => <TableHead>{'TableHead'}</TableHead>);
