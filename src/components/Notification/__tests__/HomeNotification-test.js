import React from 'react'
import { shallow } from 'enzyme'

import HomeNotification from '../HomeNotification'

function getTestTasks (num = 2) {
  return Array(num).fill().map((e, i) => (
    {
      id: i,
      name: 'test' + i,
      actions: {
        updateStatus: jest.fn(),
        updateName: jest.fn(),
      }
    }
  ))
}

function getWrapper (tasks = null) {
  return shallow(<HomeNotification tasks={tasks || getTestTasks()} />)
}

describe('<HomeNotification />', () => {

  test('has 2 active tasks', () => {
    const wrapper = getWrapper()
    expect(wrapper.find('Notification').props()).toMatchSnapshot()
  })

  test('has all tasks completed', () => {
    const tasks = getTestTasks(2).map(task => {
      task.isCompleted = true
      return task
    })
    const wrapper = getWrapper(tasks)
    expect(wrapper.find('Notification').props()).toMatchSnapshot()
  })
})
