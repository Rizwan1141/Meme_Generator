import React, { Component } from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import rootReducer from './reducers'
import { fetchMemes } from './actions'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => console.log('store', store.getState()))
store.dispatch(fetchMemes())

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)
//adding comment for git azure lini;nGk
//second commit