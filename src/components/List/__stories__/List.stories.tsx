import { List, ListItemProps } from '@bluebase/components';

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const ListItem = getComponent<ListItemProps>('ListItem');

storiesOf('List', module)
	.add('Basic Example', () => (
		<List>
			<List.Subheader>Social Accounts</List.Subheader>
			<List.Item
				title="Facebook"
				left={<List.Icon name="facebook" />}
				onPress={() => console.log('Facebook')}
			/>
			<List.Item
				title="Google"
				left={<List.Icon color="red" name="google" />}
				onPress={() => console.log('Google')}
			/>
		</List>
	))

	.add('Basic Example with description', () => (
		<List>
			<ListItem
				title="First Item"
				left={<List.Icon name="folder" />}
				onPress={console.log}
				description="description"
			/>
		</List>
	))

	.add('With no icon given but inset true', () => (
		<List>
			<List.Subheader>Social Accounts</List.Subheader>
			<List.Item
				title="Facebook"
				left={() => <List.Icon name="facebook" />}
				onPress={() => console.log('Facebook')}
			/>
			<List.Item title="Twitter" inset={true} onPress={() => console.log('Twitter')} />
			<List.Item
				title="Google"
				left={() => <List.Icon color="red" name="google" />}
				onPress={() => console.log('Google')}
			/>
		</List>
	));
