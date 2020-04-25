import { BlueBaseApp } from '@bluebase/core';
import { Icon } from '@bluebase/components';
import Plugin from '../../../index';
import React from 'react';
import { Searchbar } from '../index';
import { Searchbar as SearchbarRNP } from 'react-native-paper';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('Searchbar', () => {
	it('should render Searchbar', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find(SearchbarRNP).prop('placeholder')).toBe('Search');
	});

	it('should render Searchbar with value', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" value="Something" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find(SearchbarRNP).prop('value')).toBe('Something');
	});

	it('should render Searchbar with custom search icon', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" value="Something" icon={{ name: 'custom' }} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find(Icon).prop('name')).toBe('custom');
	});

	it('should render Searchbar with custom clear icon', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" value="Something" clearIcon={{ name: 'custom' }} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find(Icon).prop('name')).toBe('custom');
	});
});
