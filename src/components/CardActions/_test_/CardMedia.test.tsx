import { CardMedia } from '../CardMedia.component';
import React from 'react';
import { shallow } from 'enzyme';


test('CardMedia component component should show children', () => {
	const component = shallow(
    <CardMedia source="https://Foo.png" />

  );
  // expect(component).toMatchSnapshot();
	expect(component.find('CardHeader').first().prop('source')).toEqual('https://Foo.png');
});
