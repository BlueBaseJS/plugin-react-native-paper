// import { Card } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';
import { CardCover } from '../';

test('CardCover component component should show children', async () => {
	const component = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<CardCover />
		</BlueBaseApp>
	);
	await waitForElement(component, CardCover);

	expect(component.find('CardCover')).toBeDefined();
});
