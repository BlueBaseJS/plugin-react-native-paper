import { Card } from '../Card.component';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('Card component component should show children', () => {
	const component = shallow(
    <Card title="Foo" >
      <Text>Card</Text>
    </Card>
  );
  // expect(component).toMatchSnapshot();
	expect(component.childAt(0).text()).toEqual('Card');
});
