import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import AppWithContext from './containers/AppWithContext'
import PostsProvider from './components/Posts.context'
import styles from './theme.module.css';

console.log(styles)
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <div className={styles.container}>
    <div>
    <Provider store={store}>
      <App />
    </Provider>
    </div>
    <div>
    <PostsProvider>
      <AppWithContext />
    </PostsProvider>
    </div>
  </div>,
  document.getElementById('root')
)
