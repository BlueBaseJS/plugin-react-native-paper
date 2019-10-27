import { Body2, List } from '@bluebase/components';

import React from 'react';
import { SafeAreaView } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('ListItem', module)
	.add('Basic Example', () => (
		<SafeAreaView>
			<List.Item
				title="Facebook"
				description="A description here"
				left={<List.Icon name="facebook" />}
				onPress={() => console.log('Facebook')}
			/>
		</SafeAreaView>
	))
	.add('Node in description', () => (
		<SafeAreaView>
			<List.Item
				title="Facebook"
				description={<Body2 style={{ color: 'red' }}>A custom description here</Body2>}
				left={<List.Icon name="facebook" />}
				onPress={() => console.log('Facebook')}
			/>
		</SafeAreaView>
	))
	.add('Multiple Nodes in description', () => (
		<SafeAreaView>
			<List.Item
				title="Facebook"
				description={
					<Body2 style={{ color: 'red' }}>
						<Body2>Line 1</Body2>
						{'\n'}
						<Body2>Line 2</Body2>
						{'\n'}
						<Body2>Line 3</Body2>
						{'\n'}
						<Body2>Line 4</Body2>
						{'\n'}
						<Body2>Line 5</Body2>
						{'\n'}
						<Body2>Line 6</Body2>
					</Body2>
				}
				left={<List.Icon name="facebook" />}
				onPress={() => console.log('Facebook')}
			/>
		</SafeAreaView>
	));
