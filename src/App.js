import React from 'react'
import Header from './common/header'

import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

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

          <Route exact path="/login" component={Login} />
        </>
      </BrowserRouter>
    )
  }
}

export default App
