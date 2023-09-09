// import { Card } from '@bluebase/components';
import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { CardContent } from '../';

test('CardContent component component should show children', () => {
	const component = shallow(
		<CardContent>
			<Text>Card</Text>
		</CardContent>
	);
	// expect(component).toMatchSnapshot();
	expect(component.find('CardContent')).toBeDefined();
});
