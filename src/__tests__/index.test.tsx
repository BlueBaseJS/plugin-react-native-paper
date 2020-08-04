/* eslint-disable react/jsx-no-bind */
import { BlueBase, BlueBaseApp, getComponent } from '@bluebase/core';

import { Card } from 'react-native-paper';
import Plugin from '../index';
import { withPortal as Portal } from '../withPortal';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import deepmerge from 'deepmerge';
import { shallow } from 'enzyme';

const Button = getComponent('Button');

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('@bluebase/plugin-react-native-paper')).toBeTruthy();
});

test('WithPortal hoc', async () => {
	const Component: any = () => 'string';
	const HOC = Portal(Component) as any;
	const wrapper = shallow(<HOC component={() => 'PortalHoc'} />);

	expect(wrapper.props().children.props.component()).toEqual('PortalHoc');
});

test('should apply bluebase theme to react native paper components', (done: any) => {
	const rendered = TestRenderer.create(
		<BlueBaseApp plugins={[Plugin]}>
			<Button>A Button</Button>
		</BlueBaseApp>
	);

	setTimeout(() => {
		const props = rendered.root.findByType(Text).props;
		const style: any = deepmerge(
			props.style[0],
			deepmerge.all(props.style[1].filter((x: any) => x !== undefined))
		);
		expect(style.color).toBe('#3f51b5');
		// expect(rendered).toMatchSnapshot();
		// expect(rendered.toJSON()).toMatchSnapshot();
		done();
	});
});

test('should apply bluebase dark theme to react native paper components', (done: any) => {
	const configs = {
		'theme.name': 'bluebase-dark',
	};

	const rendered = TestRenderer.create(
		<BlueBaseApp configs={configs} plugins={[Plugin]}>
			<Card testID="dark-card">
				<Button>A Button</Button>
			</Card>
		</BlueBaseApp>
	);

	setTimeout(() => {
		expect((rendered as any).toJSON().children[0].props.style.backgroundColor).toBe('#424242');
		done();
	});
});
