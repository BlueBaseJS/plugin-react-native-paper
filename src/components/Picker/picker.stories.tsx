import { Picker } from './index';
import { Picker } from 'react-native'
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const data = [{ name: 'SanPyaeLin', code: '22' }, { name: 'Jhon', code: '1' }, { name: 'Marry', code: '2' }]

storiesOf('Picker', module)



    .add('Picker', () => (
        <IOSPicker
            selectedValue={'SanPyaeLin'}
            onValueChange={(d, i) => this.change(d, i)}>
            {
                data.map((item, index) =>
                    <Picker.Item key={index} label={item.name} value={item.code} />
                )
            }
        </IOSPicker>
    ))

