import { Button, CardHeader } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { Card } from 'react-native-paper';
import Plugin from '../../../';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('CardHeader component component should show children', async () => {
	const rendered = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<CardHeader
				title="First Item"
				description="description"
				left={<Button title="Left" />}
				right={<Button title="right" />}
			/>
		</BlueBaseApp>
	);

	await waitForElement(rendered, CardHeader);

	// expect(rendered).toMatchSnapshot();
	expect(rendered.find(Card.Title).prop('subtitle')).toBe('description');
	expect(rendered.find('Button[title="left"]')).toBeTruthy();
	expect(rendered.find('Button[title="right"]')).toBeTruthy();
});
