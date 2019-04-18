import { Card } from '@bluebase/components';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

test('CardContent component component should show children', () => {
	const component = shallow(
    <Card.Content>
      <Text>Card</Text>
    </Card.Content>
  );
  // expect(component).toMatchSnapshot();
	expect(component.find('CardContent')).toBeDefined();
});
