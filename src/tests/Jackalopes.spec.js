//TESTS
import React from 'react'
import { shallow } from 'enzyme'
import Jackalopes from './Jackalopes'

function setup(value = 0) {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  }
  const component = shallow(
    <Jackalopes value={value} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p')
  }
}

describe('Jackalopes component', () => {
  it('should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^Jackalopes: 0/)
  })

  it('first button should call onDecrement', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onDecrement).toBeCalled()
  })


  it('second button should call onIncrement', () => {
    const { buttons, actions } = setup()
    buttons.at(1).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })

  it('third button should not call onIncrement if the Jackalopes count is even', () => {
    const { buttons, actions } = setup(42)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).not.toBeCalled()
  })

  it('third button should call onIncrement if the Jackalopes count is odd', () => {
    const { buttons, actions } = setup(43)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })

  it('third button should call onIncrement if the Jackalopes count is odd and negative', () => {
    const { buttons, actions } = setup(-43)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })

  it('fourth button should call onIncrement in a second', (done) => {
    const { buttons, actions } = setup()
    buttons.at(3).simulate('click')
    setTimeout(() => {
      expect(actions.onIncrement).toBeCalled()
      done()
    }, 1000)
  })
})
