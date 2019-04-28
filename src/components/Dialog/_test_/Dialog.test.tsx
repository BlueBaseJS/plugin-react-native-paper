import { Dialog } from '../index';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

test('Dialog component should use child prop to show children', () => {
	const component = shallow(
    <Dialog visible={true}>
      <Text>Dialog</Text>
    </Dialog>
  );
	expect(component.props().children.props.children.props.children).toEqual('Dialog');

});

