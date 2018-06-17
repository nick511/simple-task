import React from 'react'
import { storiesOf } from '@storybook/react'

import '../src/containers/App/app.css'
import Notification, { TYPE_INFO, TYPE_SUCCESS } from '../src/components/Notification'
import Tasks from '../src/components/Tasks'
import Task from '../src/components/Tasks/Task'

storiesOf('Notification', module)
  .addWithJSX('Info type', () => (
    <Notification title='Complete all tasks' desc='You have 3 active tasks' type={TYPE_INFO} />
  ))
  .addWithJSX('Success type', () => (
    <Notification title='All tasks completed' desc='Well done!' type={TYPE_SUCCESS} />
  ))

storiesOf('Tasks', module)
  .addWithJSX('Task list', () => {
    let tasks = [
      { id: 1, name: 'First Task', isCompleted: true },
      { id: 2, name: 'Second Task', isCompleted: false },
    ]

    let actions = {
      addTask: () => { },
      updateStatus: () => {},
      updateName: () => {},
    }
    return <Tasks tasks={tasks} actions={actions} />
  })
  .addWithJSX('Single task', () => {
    let task = { id: 1, name: 'First Task', isCompleted: true }
    let actions = {
      updateStatus: () => {},
      updateName: () => {},
    }
    return <Task id={task.id} name={task.name} isCompleted={task.isCompleted} actions={actions} />
  })
