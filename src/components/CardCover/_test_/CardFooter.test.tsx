import { CardActions } from '../CardFooter.component';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('CardFooter component should show children', () => {
	const component = shallow(
    <CardActions>
      <Text>CardFooter</Text>
    </CardActions>
  );
  // expect(component).toMatchSnapshot();
	expect(component.childAt(0).text()).toEqual('CardFooter');
});
