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
    jackalopes={store.getState().jackalopes}
    unicorns={store.getState().unicorns}
    isFighting={store.getState().isFighting}
    onIncrement={() => store.dispatch({ type: 'INCREMENT-JACKALOPES' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT-JACKALOPES' })}
    onAddUnicorn={() => store.dispatch({ type: 'ADD-UNICORN' })}
    onStartFight={() => store.dispatch({ type: 'START-FIGHT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
