// import { Card } from '@bluebase/components';
import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { CardActions } from '../';

test('CardActions component component should show children', () => {
	const component = shallow(
		<CardActions>
			<Text>Card</Text>
		</CardActions>
	);
	expect(component.find('CardActions')).toBeDefined();
});
