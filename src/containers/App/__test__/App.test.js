import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

it('renders App without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})

// Todo: test routing
/* it('renders Content without crashing', () => {
  const context = createRouterContext({ location: { pathname: '/two' } })
  const wrapper = mount(<Content />, { context })
  expect(wrapper).toMatchSnapshot()
}) */
