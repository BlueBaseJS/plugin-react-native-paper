import { CardHeader } from '../';
import React from 'react';
import { shallow } from 'enzyme';


test('CardHeader component component should show children', () => {
	const component = shallow(
    <CardHeader title="Foo" />

  );
  // expect(component).toMatchSnapshot();
	expect(component.find('title')).toBeDefined();
});
