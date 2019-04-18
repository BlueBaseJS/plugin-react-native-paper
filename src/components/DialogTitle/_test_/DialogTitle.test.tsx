import { DialogTitle } from '../index';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('DialogTitle component should use child prop to show children', () => {
	const component = shallow(
    <DialogTitle>
      <Text>DialogTitle</Text>
    </DialogTitle>
  );
	expect(component.childAt(0).childAt(0).text()).toEqual('DialogTitle');

});

