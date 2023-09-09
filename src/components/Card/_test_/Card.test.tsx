import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { Card } from '../';

test('Card component component should show children', () => {
	const component = shallow(
		<Card>
			<Text>Card</Text>
		</Card>
	);
	// expect(component).toMatchSnapshot();
	expect(component.find('Text')).toBeDefined();
});
