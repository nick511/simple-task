import React from 'react'
import { shallow } from 'enzyme'

import Task from '../Task'

describe('<Task />', () => {
  let wrapper = null
  let task = null

  beforeEach(() => {
    task = {
      id: 1,
      name: 'test',
      actions: {
        updateStatus: jest.fn(),
        updateName: jest.fn(),
      }
    }
    wrapper = shallow(<Task {...task} />)
  })

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('renders task title', () => {
    expect(wrapper.find('.task__title').text()).toEqual(task.name)
  })

  test('renders task status', () => {
    expect(wrapper.find('.task__status').text()).toEqual('Active')
    wrapper.setProps({ isCompleted: true })
    expect(wrapper.find('.task__status').text()).toEqual('Completed')
  })

  test('renders task__edit after clicking task', () => {
    expect(wrapper.find('.task__status').text()).toEqual('Active')
    wrapper.find('.task__main').simulate('click')
    expect(wrapper.exists('.task__edit')).toEqual(true)

    wrapper.find('.task__edit a').at(0).simulate('click')
    expect(wrapper.exists('.task__edit')).toEqual(false)
    expect(task.actions.updateStatus).toHaveBeenCalledTimes(1)
  })
})
