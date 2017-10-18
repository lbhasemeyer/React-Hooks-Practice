//TESTS
import React from 'react'
import { shallow } from 'enzyme'
import Unicorns from './Unicorns'
// import sinon from 'sinon';

function setup(value = 0) {
  const actions = {
    addUnicorn: jest.fn()
  }
  const component = shallow(
    <Unicorns value={value} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p'),
    img: component.find('img')
  }
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p, img } = setup()
    expect(img).toBeUndefined
    expect(p.at(1).text()).toMatch("(You currently have 0 unicorns)")
  })

  it('button should call addUnicorn', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.addUnicorn).toBeCalled()
  })

  //check that the correct number of unicorns render
  //test props
  //test passed prop functions
})