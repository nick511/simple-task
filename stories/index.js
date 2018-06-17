import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import '../src/containers/App/app.css'
import Notification, { TYPE_INFO, TYPE_SUCCESS } from '../src/components/Notification'
import Task from '../src/components/Tasks/Task'

storiesOf('Notification', module)
  .add('type:info', () => (
    <Notification title='Complete all tasks' desc='You have 3 active tasks' type={TYPE_INFO} />
  ))
  .add('type:success', () => (
    <Notification title='All tasks completed' desc='Well done!' type={TYPE_SUCCESS} />
  ))

storiesOf('Task', module)
  .add('with text', () => {
    let task = { id: 1, name: 'First Task', isCompleted: true }
    let actions = {
      updateStatus: () => {},
      updateName: () => {},
    }
    return <Task id={task.id} name={task.name} isCompleted={task.isCompleted} actions={actions} onClick={action('clicked')} />
  })
  // .add('with some emoji', () => (
  // ))
