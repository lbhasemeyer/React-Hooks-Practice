//THIS IS THE COMPONENT WE WILL RENDER IN THE BODY OF THE COMPONENT (IN index.html)
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import AppContainer from './components/AppContainer'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
  <AppContainer
    clicked={store.getState().clicked}
    unicorns={store.getState().unicorns}
    onIncrement={() => store.dispatch({ type: 'INCREMENT-COUNTER' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT-COUNTER' })}
    onAddUnicorn={() => store.dispatch({ type: 'ADD-UNICORN' })}
  />,
  rootEl
)

render()
store.subscribe(render)
