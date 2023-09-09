import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { Dialog } from '../index';

test('Dialog component should use child prop to show children', () => {
	const component = shallow(
		<Dialog visible>
			<Text>Dialog</Text>
		</Dialog>
	);
	expect(component.props().children.props.children.props.children).toEqual('Dialog');

});

