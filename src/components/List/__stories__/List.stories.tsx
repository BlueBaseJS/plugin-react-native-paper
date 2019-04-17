import { List } from '@bluebase/components';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('List', module)

.add('Basic Example', () => (
	<List>
		<List.Subheader>Some title</List.Subheader>
		<List.Item
			title="First Item"
			left={() => <List.Icon name="folder" />}
			onPress={console.log}
		/>
		<List.Item
			title="Second Item"
			left={() => <List.Icon color="#000" name="folder" />}
		/>
	</List>
))
;