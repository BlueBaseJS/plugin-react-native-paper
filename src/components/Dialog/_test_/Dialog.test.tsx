import { Dialog } from '../index';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('Dialog component should use child prop to show children', () => {
	const component = shallow(
    <Dialog>
      <Text>Dialog</Text>
    </Dialog>
  );
	expect(component.childAt(0).childAt(0).text()).toEqual('Dialog');

});

