// import { Card } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { CardCover } from '../';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('CardCover component component should show children', async () => {
	const component = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<CardCover />
		</BlueBaseApp>
	);
	await waitForElement(component, CardCover);

	expect(component.find('CardCover')).toBeDefined();
});
