import { ListAvatar } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
// import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';

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
