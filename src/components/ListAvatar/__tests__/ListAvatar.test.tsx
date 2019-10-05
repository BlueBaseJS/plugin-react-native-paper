import { BlueBaseApp } from '@bluebase/core';
import { ListAvatar } from '@bluebase/components';
import Plugin from '../../../index';
import React from 'react';
// import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('ListAvatar', () => {
	it('should render a list with 2 items', async () => {
		const rendered = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<ListAvatar type="icon" color="white" icon="shield-key" />
			</BlueBaseApp>
		);

		await waitForElement(rendered, 'Avatar');

		expect(
			rendered
				.find('Avatar')
				.last()
				.prop('size')
		).toBe(40);
	});
});
