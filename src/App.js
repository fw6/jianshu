import React from 'react'
import Header from './common/header'
import GlobalStyle from './globalCSS'
import GlobalIconfont from './static/iconfont/iconfont'

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <GlobalIconfont />
        <Header />
      </>
    )
  }
}

export default App
