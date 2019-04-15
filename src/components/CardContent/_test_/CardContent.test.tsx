import { CardContent } from '../CardBody.component';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('CardContent component should show children', () => {
	const component = shallow(
    <CardContent>
      <Text>CardContent</Text>
    </CardContent>
  );
  // expect(component).toMatchSnapshot();
	expect(component.childAt(0).text()).toEqual('CardContent');
});
