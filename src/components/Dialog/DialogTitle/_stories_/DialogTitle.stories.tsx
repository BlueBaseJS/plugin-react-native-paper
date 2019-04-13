import { DialogActionsProps } from '@bluebase/components';
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';


const DialogTitle = getComponent<DialogActionsProps>('DialogTitle');

const stories = storiesOf('DialogTitle', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

  .add('DialogTitle with children props', () => (
    <React.Fragment>
      <DialogTitle>
        Modal title
          </DialogTitle>
    </React.Fragment>
  ));