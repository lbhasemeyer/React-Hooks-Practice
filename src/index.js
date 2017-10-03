//THIS IS THE COMPONENT WE WILL RENDER IN THE BODY OF THE COMPONENT (IN index.html)
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')
console.log('CLICKED STATE:', store.getState());
const render = () => ReactDOM.render(
  <Counter
    clickedState={store.getState().clicked}
    unicornState={store.getState().unicorns}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
