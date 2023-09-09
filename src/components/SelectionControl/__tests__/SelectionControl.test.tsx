import { Noop } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { SelectionControl } from '..';

describe('SelectionControl', () => {
	it('should render label on the right', (done: any) => {
		const rendered = TestRenderer.create(
			<BlueBaseApp>
				<SelectionControl label="foo" ControlComponent={Noop} />
			</BlueBaseApp>
		);

		setTimeout(() => {
			// expect(rendered).toMatchSnapshot();

			const style: any[] = (rendered as any).toJSON().props.style;

			expect((style as any).flexDirection).toBe('row');
			done();
		});
	});

	it('should render label on the left', (done: any) => {
		const rendered = TestRenderer.create(
			<BlueBaseApp>
				<SelectionControl label="foo" labelPlacement="end" ControlComponent={Noop} />
			</BlueBaseApp>
		);

		setTimeout(() => {
			// expect(rendered).toMatchSnapshot();

			const style: any[] = (rendered as any).toJSON().props.style;

			expect((style as any).flexDirection).toBe('row-reverse');
			done();
		});
	});

	it('should render label on the top', (done: any) => {
		const rendered = TestRenderer.create(
			<BlueBaseApp>
				<SelectionControl label="foo" labelPlacement="top" ControlComponent={Noop} />
			</BlueBaseApp>
		);

		setTimeout(() => {
			// expect(rendered).toMatchSnapshot();

			const style: any[] = (rendered as any).toJSON().props.style;

			expect((style as any).flexDirection).toBe('column');
			done();
		});
	});

	it('should render label on the bottom', (done: any) => {
		const rendered = TestRenderer.create(
			<BlueBaseApp>
				<SelectionControl label="foo" labelPlacement="bottom" ControlComponent={Noop} />
			</BlueBaseApp>
		);

		setTimeout(() => {
			// expect(rendered).toMatchSnapshot();

			const style: any[] = (rendered as any).toJSON().props.style;

			expect((style as any).flexDirection).toBe('column-reverse');
			done();
		});
	});
});
