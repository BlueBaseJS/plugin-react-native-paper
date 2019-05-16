// import { Card } from '@bluebase/components';
import { CardActions } from '../';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

test('CardActions component component should show children', () => {
	const component = shallow(
		<CardActions>
			<Text>Card</Text>
		</CardActions>
	);
	expect(component.find('CardActions')).toBeDefined();
});
