import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

configure({ adapter: new Adapter() })

test('simple test', () => {
  expect(shallow(<div />).type()).toBe('div')
})
