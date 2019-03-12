import { BlueBaseApp } from '@bluebase/core';
import { Divider } from '@bluebase/components';
import Plugin from '../../../index';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import deepmerge from 'deepmerge';

test('Divider component with inset prop=true', (done) => {

	const rendered = TestRenderer.create(
    <BlueBaseApp plugins={[Plugin]}>
			<Divider inset={true} />
		</BlueBaseApp>
	);

	setTimeout(() => {
		// expect(rendered).toMatchSnapshot();

		const styleProp: any[] = (rendered as any).toJSON().children[0].props.style;
		const style = deepmerge.all(styleProp.filter(x => x !== undefined));

		expect((style as any).marginLeft).toBeGreaterThan(0);
		done();
	});

});

test('Divider component with inset prop=false', (done) => {

	const rendered = TestRenderer.create(
    <BlueBaseApp plugins={[Plugin]}>
			<Divider inset={false} />
		</BlueBaseApp>
	);

	setTimeout(() => {
		// expect(rendered).toMatchSnapshot();

		const styleProp: any[] = (rendered as any).toJSON().children[0].props.style;
		const style = deepmerge.all(styleProp.filter(x => x !== undefined));

		expect((style as any).marginLeft).toBeUndefined();
		done();
	});

});
