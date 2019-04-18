import { DialogActionsProps, Button } from '@bluebase/components';
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';


const DialogAction = getComponent<DialogActionsProps>('DialogActions');

const stories = storiesOf('DialogAction', module);

stories

  .add('DialogAction with children props', () => (
    <React.Fragment>
      <DialogAction style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Button color="primary">
          Save changes
          </Button>
      </DialogAction>
    </React.Fragment >
  ));