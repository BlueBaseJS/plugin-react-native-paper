import { Card } from '@bluebase/components';
import React from 'react';
import { shallow } from 'enzyme';


test('CardCover component component should show children', () => {
	const component = shallow(
    <Card.Cover source={{ uri: 'https://Foo.png' }} />

  );
	expect(component.find('CardCover')).toBeDefined();
});

