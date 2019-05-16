import { IconButton } from '..';
import React from 'react';
// import { View } from 'react-native';
import { shallow } from 'enzyme';

test('IconButton component with name Prop', () => {
	const onPress = () => null;
	const Icon = IconButton(onPress as any);
	const color = 'primary';
	const size = 8;
	Icon.props.icon(color, size);
	const component = shallow(<IconButton color={'primary'} size={8} name="star" />);
	// expect(component).toMatchSnapshot();
	expect(component.props().name).toEqual('star');
	expect(component.props().color).toEqual('primary');
	expect(component.props().size).toEqual(8);
});

test('Button component with Size Prop', () => {
	const component = shallow(<IconButton name="star" size={20} />);
	expect(component.props().size).toEqual(20);
});
