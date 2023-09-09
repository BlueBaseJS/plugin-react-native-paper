
import { CardHeader, Text } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';
import { IconButton } from 'react-native-paper';

const stories = storiesOf('Card', module);

stories

	.add('CardHeader', () => (
		<CardHeader
			style={{}}
			left={<Text>kk</Text>}
			right={
				<IconButton icon="more-vert" onPress={console.log} />}
			title="Shrimp and Chorizo Paella"
			description="September 14, 2016"
		/>
	));
