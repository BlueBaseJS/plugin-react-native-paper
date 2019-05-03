import { Button, CardHeader } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { Card } from 'react-native-paper';
import Plugin from '../../../';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

it('CardHeader component should show  full children', async () => {
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
it('CardHeader component should show children without left', async () => {
	const rendered = mount(
    <BlueBaseApp plugins={[Plugin]}>
      <CardHeader
        title="First Item"
        description="description"
        right={<Button title="right" />}
      />
    </BlueBaseApp>
  );

	await waitForElement(rendered, CardHeader);

	// expect(rendered).toMatchSnapshot();
	expect(rendered.find(Card.Title).prop('subtitle')).toBe('description');
	expect(rendered.find('Button[title="left"]')).toEqual({});
  expect(rendered.find('Button[title="right"]')).toBeTruthy();
  expect(rendered.props().children.props.title).toEqual("First Item")  
});
it('CardHeader component should show children without right', async () => {
	const rendered = mount(
    <BlueBaseApp plugins={[Plugin]}>
      <CardHeader
        title="First Item"
        description="description"
        left={<Button title="left" />}
      />
    </BlueBaseApp>
  );

	await waitForElement(rendered, CardHeader);

	// expect(rendered).toMatchSnapshot();
	expect(rendered.find(Card.Title).prop('subtitle')).toBe('description');
	expect(rendered.find('Button[title="left"]')).toBeTruthy();
  expect(rendered.find('Button[title="right"]')).toEqual({});
  expect(rendered.props().children.props.description).toEqual("description");  
});
