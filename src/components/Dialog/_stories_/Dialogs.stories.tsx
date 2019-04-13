import { } from "@bluebase/components"
import React from 'react';
// import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

import Dialog from "./DialogComponent";
storiesOf('Dialog', module)

  .add('fullDialog component with all components props', () => (
    <Dialog />

  ))
