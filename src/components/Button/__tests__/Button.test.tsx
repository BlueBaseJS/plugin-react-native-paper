import { BlueBaseApp } from '@bluebase/core';
import { Button } from '../';
import { Button as BB_Button } from '@bluebase/components';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import deepmerge from 'deepmerge';
import { mount } from 'enzyme';

test('render and outline button with secondary color', done => {
	const rendered = TestRenderer.create(
		<BlueBaseApp components={{ Button }}>
			<BB_Button variant="outlined" color="secondary" />
		</BlueBaseApp>
	);

	setTimeout(() => {
		const style: any[] = (rendered as any).toJSON().props.style;
		expect((style as any).backgroundColor).toBe('transparent');

		// Text
		const textProps = rendered.root.findByType(Text).props;

		const textStyle: any = deepmerge(
			textProps.style[0],
			deepmerge.all(textProps.style[1].filter((x: any) => x !== undefined))
		);

		expect((textStyle as any).color).toBe('#f50057');
		done();
	});
});

test('render and outline button with secondary color', done => {
	const wrapper = mount(
		<BlueBaseApp components={{ Button }}>
			<BB_Button variant="outlined" color="secondary" />
		</BlueBaseApp>
	);

	expect((wrapper as any).find('Button').props.icon);
	done();
});
