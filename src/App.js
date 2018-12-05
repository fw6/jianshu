import React from 'react'
import Header from './common/header'
import GlobalStyle from './globalCSS'
import GlobalIconfont from './static/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Detail from './pages/detail'

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <GlobalIconfont />
        <Header />
        <BrowserRouter>
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Detail} />
          </>
        </BrowserRouter>
      </>
    )
  }
}

export default App
