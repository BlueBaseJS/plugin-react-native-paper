import { Menu } from '../Menu';
import { MenuItem } from '../../MenuItem';
import React from 'react';
import { shallow,mount} from 'enzyme';

test('Test', () => {
    expect(require('../index')).toBeTruthy();
})

test('Menu component with visible ', () => {
    const component = shallow(
        <Menu
            visible={true}
            anchor={() => "like"}>

        </Menu>

    );
    expect(component.props().visible).toBe(true)
    expect(component.props().anchor()).toBe('like')

});

test('Menu component with style ', () => {
    const component = shallow(
        <Menu
            anchor={() => "like"}
            style= {{padding:20}}
        >
        </Menu>

    );
    expect(component.props().anchor()).toBe('like');
    const style = component.props().style.padding;
    expect(style).toBe(20)

})

test('should check if title prop is working', () => {

    const component = mount(
        <Menu visible={true}>
            <MenuItem title='item one' />
        </Menu>
    );
    expect(component.childAt(0).props().children.props.title).toBe('item one')
});

test('should check if disbaled prop is working', () => {

    const component = mount(
            <MenuItem title='check' disabled={true}  />
    );
    expect(component.props().disabled).toBe(true)
})

