import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

render(
  <div>
    <h1>Hello React</h1>
  </div>,
  document.getElementById('app')
)
