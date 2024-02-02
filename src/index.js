import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ArticlePage3 from './views/article-page3'
import ArticlePage1 from './views/article-page1'
import Home from './views/home'
import ArticlePage2 from './views/article-page2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ArticlePage3} exact path="/article-page3" />
        <Route component={ArticlePage1} exact path="/article-page1" />
        <Route component={Home} exact path="/" />
        <Route component={ArticlePage2} exact path="/article-page2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
