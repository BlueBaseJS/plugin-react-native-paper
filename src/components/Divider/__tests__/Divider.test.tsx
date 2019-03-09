import { Divider } from '../Divider';
import React from 'react';
import { shallow } from 'enzyme';


test('Divider component with inset prop=true', () => {
	const divider = shallow(
    <Divider inset={true} />
  );
	expect(divider.props().inset).toEqual(true);
});

test('Divider component with inset prop=false', () => {
	const divider = shallow(
    <Divider inset={false} />
  );
	expect(divider.props().inset).toEqual(false);
});

test('Divider component with inset prop=false', () => {
	const divider = shallow(
    <Divider classes={{}} />
  );
	expect(divider.props().classes).toEqual({});
});
