import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import AppWithContext from './containers/AppWithContext'
import PostsProvider from './context/posts'
import ThemeProvider from './context/theme'
import styles from './theme.module.css';

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
    <ThemeProvider>
      <PostsProvider>
        <AppWithContext />
      </PostsProvider>
    </ThemeProvider>
    </div>
  </div>,
  document.getElementById('root')
)
