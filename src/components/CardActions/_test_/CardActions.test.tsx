import { CardActions } from '../';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';



test('CardActions component component should show children', () => {
	const component = shallow(
    <CardActions title="Foo" >
      <Text>Card</Text>
    </CardActions>
  );
	expect(component.find('CardActions')).toBeDefined();
});

