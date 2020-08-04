import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { Radio } from '../../Radio';
import { RadioGroup } from '../RadioGroup';
import React from 'react';
import deepmerge from 'deepmerge';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const CAPTION_COLOR = 'rgba(0, 0, 0, 0.38)';
const ERROR_COLOR = '#f44336';

describe('RadioGroup', () => {
	it('should map onValueChange fn to onChange fn', async () => {
		const cb = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup onValueChange={cb}>
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);

		await waitForElement(component as any, RadioGroup);

		const radio = component.find('TouchableRipple').first();

		// expect(component).toMatchSnapshot();
		const onPress = radio.prop('onPress') as any;

		onPress();

		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('option-a');
	});

	// it('should make the radio passed by "value" prop as selected on render', async () => {

	// 	const component = mount(
	// 		<BlueBaseApp plugins={[Plugin]}>
	// 			<RadioGroup value="option-c">
	// 				<Radio label="Option A" value="option-a" />
	// 				<Radio label="Option B" value="option-b" />
	// 				<Radio label="Option C" value="option-c" />
	// 			</RadioGroup>
	// 		</BlueBaseApp>
	// 	);

	// 	await waitForElement(component as any, RadioGroup);
	// 	// expect(component).toMatchSnapshot();

	// 	const radio = component.find('[value="option-c"]').last();

	// 	expect(radio.prop('status')).toBe('checked');
	// });

	it('should display label & helperText', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup label="FooBar" helperText="description">
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);

		await waitForElement(component as any, RadioGroup);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormControlLabel Text').last();
		const helperText = component.find('FormHelperText Text').last();

		expect(label.getElements()).toHaveLength(1);
		expect(label.text()).toBe('FooBar');

		expect(helperText.getElements()).toHaveLength(1);
		expect(helperText.text()).toBe('description');
	});

	it('should display label & helperText in grey color if error is true', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup label="FooBar" helperText="description">
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);

		await waitForElement(component as any, RadioGroup);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormControlLabel Text').last();
		const helperText = component.find('FormHelperText Text').last();

		const labelStyleProp: any = label.prop('style');
		const labelStyle: any = deepmerge(
			labelStyleProp[0],
			deepmerge.all(labelStyleProp[1].filter((x: any) => !!x))
		);

		expect(labelStyle.color).toBe(CAPTION_COLOR);

		const helperTextStyleProp: any = helperText.prop('style');
		const helperTextStyle: any = deepmerge(
			helperTextStyleProp[0],
			deepmerge.all(helperTextStyleProp[1].filter((x: any) => !!x))
		);

		expect(helperTextStyle.color).toBe(CAPTION_COLOR);
	});

	it('should display label & helperText in red color if error is true', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup error label="FooBar" helperText="description">
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);

		await waitForElement(component as any, RadioGroup);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormControlLabel Text').last();
		const helperText = component.find('FormHelperText Text').last();

		const labelStyleProp: any = label.prop('style');
		const labelStyle: any = deepmerge(
			labelStyleProp[0],
			deepmerge.all(labelStyleProp[1].filter((x: any) => !!x))
		);

		expect(labelStyle.color).toBe(ERROR_COLOR);

		const helperTextStyleProp: any = helperText.prop('style');
		const helperTextStyle: any = deepmerge(
			helperTextStyleProp[0],
			deepmerge.all(helperTextStyleProp[1].filter((x: any) => !!x))
		);

		expect(helperTextStyle.color).toBe(ERROR_COLOR);
	});

	it('should only render display label and not helperText', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup label="FooBar">
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);

		await waitForElement(component as any, RadioGroup);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormControlLabel Text').last();
		const helperText = component.find('FormHelperText Text').last();

		expect(label.getElements()).toHaveLength(1);
		expect(label.text()).toBe('FooBar');

		expect(helperText.getElements()).toHaveLength(0);
	});

	it('should only render display helperText and not label', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup helperText="description">
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);

		await waitForElement(component as any, RadioGroup);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormControlLabel Text').last();
		const helperText = component.find('FormHelperText Text').last();

		expect(label.getElements()).toHaveLength(0);

		expect(helperText.getElements()).toHaveLength(1);
		expect(helperText.text()).toBe('description');
	});
});
