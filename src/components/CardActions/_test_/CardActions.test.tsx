import { Card } from '@bluebase/components';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('CardActions component component should show children', () => {
	const component = shallow(
    <Card.Actions>
      <Text>Card</Text>
    </Card.Actions>
  );
	expect(component.find('CardActions')).toBeDefined();
});

