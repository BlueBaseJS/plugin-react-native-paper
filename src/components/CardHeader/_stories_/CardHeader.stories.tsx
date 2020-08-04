
import { CardHeader, Text } from '@bluebase/components';
import { IconButton } from 'react-native-paper';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

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
