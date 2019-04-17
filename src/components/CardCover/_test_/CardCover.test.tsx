import { CardCover } from '../';
import React from 'react';
import { shallow } from 'enzyme';


test('CardCover component component should show children', () => {
const component=	shallow(
    <CardCover source="https://Foo.png" />

  );
	expect(component.find('CardCover')).toBeDefined();
});

