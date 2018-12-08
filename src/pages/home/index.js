import React from 'react'
import * as home from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import List from './components/List'
import Banner from './components/Banner'

class Home extends React.Component {
  render() {
    return (
      <home.HomeWrapper>
        <home.HomeLeft>
          {/* <home.BannerWrapper /> */}
          <Banner />
          <Topic />
          <List />
        </home.HomeLeft>
        <home.HomeRight>
          <Recommend />
          <Writter />
        </home.HomeRight>
      </home.HomeWrapper>
    )
  }
}

export default Home
