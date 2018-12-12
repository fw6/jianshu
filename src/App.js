import React from 'react'
import Header from './common/header'

import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home/loadable'
import Detail from './pages/detail/loadable'
import Login from './pages/login/loadable'
import Write from './pages/write/loadable'

import GlobalStyle from './globalCSS'
import GlobalIconfont from './static/iconfont/iconfont'

// TODO: Layout 布局 Login不包含Header组件

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <GlobalStyle />
          <GlobalIconfont />
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/write" component={Write} />
          <Route exact path="/login" component={Login} />
        </>
      </BrowserRouter>
    )
  }
}

export default App
