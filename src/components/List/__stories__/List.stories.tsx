import { List, ListItemProps } from '@bluebase/components';

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const ListItem = getComponent<ListItemProps>('ListItem');

storiesOf('List', module)


	.add('Basic Example', () => (
		<List>
			<List.Subheader>Some title</List.Subheader>
			<List.Item
				title="First Item"
				left={() => <List.Icon name="delete" />}
				onPress={console.log}
			/>
			<List.Item
				title="Second Item"
				left={() => <List.Icon color="#000" name="folder" />}
			/>
		</List>
	))


	.add('Basic Example with description', () => (
		<List>
			<ListItem
				title="First Item"
				left={() => <List.Icon name="folder" />}
				onPress={console.log}
				description="description"
			/>

		</List>
	));