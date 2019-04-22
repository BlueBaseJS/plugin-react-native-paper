import { Badge } from '../Badge';
import React from 'react';
import { shallow } from 'enzyme';


test('Badge component with visible Prop', () => {
	const component = shallow(
		<Badge visible = {false}
		/>
	);
	// expect(component).toMatchSnapshot();
	expect(component.props().visible).toEqual(false);
});