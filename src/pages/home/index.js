import React from 'react'
import { connect } from 'react-redux'

import Recommend from './components/Recommend'
import Writter from './components/Writter'
import List from './components/List'
import Banner from './components/Banner'

import { actionCreators } from './store'
import * as home from './style'

class Home extends React.Component {
  componentDidMount() {
    this.props.changeHomeData()
  }

  render() {
    return (
      <home.HomeWrapper>
        <home.HomeLeft>
          <Banner />
          {/* <Topic /> */}
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

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  }
})

export default connect(
  null,
  mapDispatch
)(Home)
