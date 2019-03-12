import { BlueBaseApp } from '@bluebase/core';
import { Button } from '@bluebase/components';
import Plugin from '../../../index';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import deepmerge from 'deepmerge';

test('render and contained button with primary color', (done) => {

	const rendered = TestRenderer.create(
    <BlueBaseApp plugins={[Plugin]}>
			<Button variant="contained" color="primary" />
		</BlueBaseApp>
	);

	setTimeout(() => {
		// expect(rendered).toMatchSnapshot();

		const style: any[] = (rendered as any).toJSON().children[0].props.style;
		// const style = deepmerge.all(styleProp.filter(x => x !== undefined));

		expect((style as any).backgroundColor).toBe('#3f51b5');
		done();
	});

});

test('render and outline button with secondary color', (done) => {

	const rendered = TestRenderer.create(
    <BlueBaseApp plugins={[Plugin]}>
			<Button variant="outlined" color="secondary" />
		</BlueBaseApp>
	);

	setTimeout(() => {
		const style: any[] = (rendered as any).toJSON().children[0].props.style;
		expect((style as any).backgroundColor).toBe('transparent');

		// Text
		const textProps = rendered.root.findByType(Text).props;

		const textStyle: any = deepmerge(
			textProps.style[0],
			deepmerge.all(
				textProps.style[1].filter((x: any) => x !== undefined)
			)
		);

		expect((textStyle as any).color).toBe('#f50057');
		done();
	});

});
