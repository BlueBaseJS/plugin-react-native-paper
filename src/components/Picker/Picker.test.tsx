import { BlueBaseApp, getComponent } from '@bluebase/core';

import React from 'react';
import { mount } from 'enzyme';
import plugin from '../../index';
import { waitForElement } from 'enzyme-async-helpers';

const PickerComponent = getComponent('PickerComponent');
test('avatar component should  return  source Image', async () => {


  const wrapper = mount(
    <BlueBaseApp plugins={[plugin]}>

      <PickerComponent
        label='enter label'
        selectedValue={'sample'}
        onValueChange={(value: any) => console.log('value', value)}
        items={[{ label: 'SanPyaeLin', value: 'SanPyaeLin' }, { label: 'Jhon', value: 'Jhon' }, { label: 'Marry', value: 'Marry' }]}
      />
    </BlueBaseApp>

  );

  await waitForElement(wrapper, PickerComponent);

  expect(wrapper.find('Modal')).toBeDefined();

});


