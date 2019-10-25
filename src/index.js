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
    isFighting={store.getState().isFighting}
    onStartFight={() => store.dispatch({ type: 'START-FIGHT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
