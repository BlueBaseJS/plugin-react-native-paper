import { Avatar } from '../Avatar';
import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const path = 'https://placeimg.com/1000/480/people';

test('avatar component should  return  source Image', async () => {


	const wrapper = mount(
    <BlueBaseApp plugins={[Plugin]}>

      <Avatar
        type="image"
        image={{ uri: path }}
      />

    </BlueBaseApp>
  );

	await waitForElement(wrapper, Avatar);

	expect(wrapper.find('Avatar')).toBeDefined();

});



test('avatar component should  return  source Image', async () => {


	const wrapper = mount(
    <BlueBaseApp plugins={[Plugin]}>

      <Avatar
        type="image"
        image={{ uri: path }}
      />

    </BlueBaseApp>
  );

	await waitForElement(wrapper, Avatar);

	expect(wrapper.find('image')).toBeDefined();

});




test('avatar component should  return  source Image', async () => {


	const wrapper = mount(
    <BlueBaseApp plugins={[Plugin]}>

      <Avatar
        type="text"
        text="string"
      />

    </BlueBaseApp>
  );

	await waitForElement(wrapper, Avatar);
	expect(wrapper.find('text')).toBeDefined();

});



test('avatar component should  return  empty', async () => {
  const TemperoryAvatar=Avatar as any;

	const wrapper = mount(
    <BlueBaseApp plugins={[Plugin]}>
        <TemperoryAvatar  />
    </BlueBaseApp>
  );


	await waitForElement(wrapper, Avatar);

	expect(wrapper.find('AvatarComponent').children().isEmpty()).toEqual(true);

});



test('avatar component should  return  type icon', async () => {


	const wrapper = mount(
    <BlueBaseApp plugins={[Plugin]}>

      <Avatar
        type="icon"
        icon="start"
      />

    </BlueBaseApp>
  );

	await waitForElement(wrapper, Avatar);

	expect(wrapper.find('Icon')).toBeDefined();

});