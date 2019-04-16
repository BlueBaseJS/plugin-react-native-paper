import { Avatar } from '../Avatar';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BlueBaseApp } from '@bluebase/core';
import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../../index';

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

	const sourceProp: any = wrapper.find('Avatar BlueBaseImage').first().prop('source');
	expect(sourceProp.uri).toBe(path);

});


