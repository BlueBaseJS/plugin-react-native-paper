import { Button } from '../Button';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('Button component should use title prop to show children', () => {
	const component = shallow(
    <Button title="Foo" />
	);
	expect(component).toMatchSnapshot();
	expect(component.childAt(0).childAt(0).text()).toEqual('Foo');
});

test('Button component should use children prop to show content', () => {
	const component = shallow(
    <Button title="Foo">
			<Text>Bar</Text>
		</Button>
  );
	expect(component.childAt(0).childAt(0).text()).toEqual('Bar');
});
