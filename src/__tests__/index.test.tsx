import { BlueBase, BlueBaseApp, getComponent } from '@bluebase/core';
import { Card } from 'react-native-paper';
import Plugin from '../index';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import deepmerge from 'deepmerge';


const Button = getComponent('Button');

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('@bluebase/plugin-react-native-paper')).toBeTruthy();
});

test('should apply bluebase theme to react native paper components', (done) => {
	const rendered = TestRenderer.create(
    <BlueBaseApp plugins={[Plugin]}>
			<Button>A Button</Button>
		</BlueBaseApp>
	);

	setTimeout(() => {

		const props = rendered.root.findByType(Text).props;
		const style: any = deepmerge(
			props.style[0],
			deepmerge.all(
				props.style[1].filter((x: any) => x !== undefined)
			)
		);
		expect(style.color).toBe('#3f51b5');
		// expect(rendered).toMatchSnapshot();
		// expect(rendered.toJSON()).toMatchSnapshot();
		done();
	});
});

test('should apply bluebase dark theme to react native paper components', (done) => {

	const configs = {
		'theme.name': 'bluebase-dark'
	};

	const rendered = TestRenderer.create(
		<BlueBaseApp configs={configs} plugins={[Plugin]}>
			<Card testID="dark-card"><Button>A Button</Button></Card>
		</BlueBaseApp>
	);

	setTimeout(() => {
		expect((rendered as any).toJSON().children[0].props.style.backgroundColor).toBe('#424242');
		done();
	});
});
