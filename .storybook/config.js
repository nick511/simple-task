import React from 'react'
import { configure, addDecorator } from '@storybook/react';

addDecorator(story => (
  <div className='content'>
    {story()}
  </div>
));

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
