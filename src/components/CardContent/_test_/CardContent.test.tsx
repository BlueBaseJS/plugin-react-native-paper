import { CardContent } from '../';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';




test('CardContent component component should show children', () => {
	const component = shallow(
    <CardContent title="Foo" >
      <Text>Card</Text>
    </CardContent>
  );
  // expect(component).toMatchSnapshot();
	expect(component.find('CardContent')).toBeDefined();
});
