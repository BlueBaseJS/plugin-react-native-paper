import { Divider } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import deepmerge from 'deepmerge';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Plugin from '../../../index';

describe('android enviornment', () => {
	test('Divider component with inset prop=true', (done: any) => {
		const rendered = TestRenderer.create(
			<BlueBaseApp plugins={[Plugin]}>
				<Divider inset />
			</BlueBaseApp>
		);

		setTimeout(() => {
			// expect(rendered).toMatchSnapshot();

			const styleProp: any[] = (rendered as any).toJSON().children[0].props.style;
			const style = deepmerge.all(styleProp.filter((x: any) => x !== undefined));

			expect((style as any).marginLeft).toBeGreaterThan(0);
			done();
		});
	});

	test('Divider component with inset prop=false', (done: any) => {
		const rendered = TestRenderer.create(
			<BlueBaseApp plugins={[Plugin]}>
				<Divider inset={false} />
			</BlueBaseApp>
		);

		setTimeout(() => {
			// expect(rendered).toMatchSnapshot();

			const styleProp: any[] = (rendered as any).toJSON().children[0].props.style;
			const style = deepmerge.all(styleProp.filter((x: any) => x !== undefined));

			expect((style as any).marginLeft).toBeUndefined();
			done();
		});
	});
});
