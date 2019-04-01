import { Divider } from '../Divider';
import React from 'react';
import { shallow } from 'enzyme';


test('Divider component with inset variant=inset', () => {
	const divider = shallow(
    <Divider inset={true} />
	);
	expect(divider.props().variant).toBe('inset');
});

test('Divider component with inset variant=fullWidth', () => {
	const divider = shallow(
    <Divider inset={false} />
  );
	expect(divider.props().variant).toBe('fullWidth');
});
