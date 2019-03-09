import { ListSubheader } from '../ListSubheader';
import React from 'react';
import { shallow } from 'enzyme';


test('ListSubheader component with inset prop=true', () => {
	const listSubheader = shallow(
    <ListSubheader inset={true} />
  );
	expect(listSubheader.props().inset).toEqual(true);
});

test('ListSubheader component with inset prop=false', () => {
	const listSubheader = shallow(
    <ListSubheader inset={false} />
  );
	expect(listSubheader.props().inset).toEqual(false);
});

test('ListSubheader component with inset prop=false', () => {
	const listSubheader = shallow(
    <ListSubheader classes={{}} />
  );
	expect(listSubheader.props().classes).toEqual({});
});
