/* eslint-disable react/jsx-no-bind */
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';
import { TablePagination } from '../index';

describe('TablePagination', () => {
	it('should show table pagination component on page 1', async () => {
		const onPageChange = jest.fn();
		const onChangeRowsPerPage = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<TablePagination
					page={0}
					count={25}
					rowsPerPage={10}
					onPageChange={onPageChange}
					onChangeRowsPerPage={onChangeRowsPerPage}
				/>
			</BlueBaseApp>
		);
		await waitForElement(wrapper, TablePagination);

		expect(wrapper.find('IconButton').at(0).prop('disabled')).toBe(true);
		expect(wrapper.find('IconButton').at(1).prop('disabled')).toBe(false);

		const onNextClick: any = wrapper.find('IconButton').at(1).prop('onPress');
		onNextClick();

		expect(onPageChange).toHaveBeenCalledTimes(1);
		expect(onPageChange).toHaveBeenLastCalledWith(1);

		expect(wrapper.find('Text').first().text()).toBe('1-10 of 25');
	});

	it('should show table pagination component on page 2', async () => {
		const onPageChange = jest.fn();
		const onChangeRowsPerPage = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<TablePagination
					page={1}
					count={25}
					rowsPerPage={10}
					onPageChange={onPageChange}
					onChangeRowsPerPage={onChangeRowsPerPage}
				/>
			</BlueBaseApp>
		);
		await waitForElement(wrapper, TablePagination);

		// expect(wrapper.find('IconButton').at(0).prop('disabled')).toBe(false);
		// expect(wrapper.find('IconButton').at(1).prop('disabled')).toBe(false);

		expect(wrapper.find('Text').first().text()).toBe('11-20 of 25');
	});

	it('should show table pagination component on page 3', async () => {
		const onPageChange = jest.fn();
		const onChangeRowsPerPage = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<TablePagination
					page={2}
					count={25}
					rowsPerPage={10}
					onPageChange={onPageChange}
					onChangeRowsPerPage={onChangeRowsPerPage}
				/>
			</BlueBaseApp>
		);
		await waitForElement(wrapper, TablePagination);

		// expect(wrapper.find('IconButton').at(0).prop('disabled')).toBe(false);
		// expect(wrapper.find('IconButton').at(1).prop('disabled')).toBe(true);

		expect(wrapper.find('Text').first().text()).toBe('21-25 of 25');
	});
});
