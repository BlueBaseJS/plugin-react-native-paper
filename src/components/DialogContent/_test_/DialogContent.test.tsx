import { DialogContent } from '../index';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('DialogContent component should use child prop to show children', () => {
	const component = shallow(
    <DialogContent>
      <Text>DialogContent</Text>
    </DialogContent>
  );
	expect(component.childAt(0).childAt(0).text()).toEqual('DialogContent');

});

