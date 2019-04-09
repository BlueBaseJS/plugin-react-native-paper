import { BlueBaseApp } from '@bluebase/core';
import React from 'react';
import { Tab } from '../Tab';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('Tab', () => {

	it('should render a DynamicIcon when icon prop is given', async () => {
		const component = mount(
			<BlueBaseApp>
				<Tab icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, Tab);

		// expect(component).toMatchSnapshot();
		expect(component.find('Tab DynamicIcon').first().prop('type')).toBe('image');
		expect(component.find('Tab DynamicIcon').first().prop('size')).toEqual(20);
		expect(component.find('Tab DynamicIcon').first().prop('source')).toMatchObject({
			uri: 'https://placeimg.com/100/100/any'
		});

	});

	it('should not render a DynamicIcon when icon prop is not given', async () => {
		const component = mount(
			<BlueBaseApp>
				<Tab label="Item" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, Tab);

		// expect(component).toMatchSnapshot();
		expect(component.find('Tab DynamicIcon')).toHaveLength(0);

	});

});


