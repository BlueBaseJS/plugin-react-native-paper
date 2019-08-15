import { BlueBaseApp, getComponent } from '@bluebase/core';

import React from 'react';
import { mount } from 'enzyme';
import plugin from '../../../../src/index';
import { waitForElement } from 'enzyme-async-helpers';

const PickerComponent = getComponent('PickerComponent');

describe('picker component', () => {
  test('component should  return  modal picker component', async () => {


    const wrapper = mount(
      <BlueBaseApp plugins={[plugin]}>

        <PickerComponent
          label='enter label'
          selectedValue={'sample'}
          mode='modal'
          onValueChange={(value: object) => value)}
          items={[{ label: 'SanPyaeLin', value: 'SanPyaeLin' }, { label: 'Jhon', value: 'Jhon' }, { label: 'Marry', value: 'Marry' }]}
        />
      </BlueBaseApp>

    );

    await waitForElement(wrapper, 'Modal');


    const instance: any = wrapper
      .find('PickerComponent[label="enter label"]')
      .last()
      .instance();


    instance.onValueChange();
    const onPress: any = wrapper.find('ListItem').first().prop('onPress');
    onPress();

    wrapper.update();



    expect(wrapper.find('Modal').last().prop('visible')).toBe(true);



  });



});


