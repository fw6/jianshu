import React from 'react'
import { connect } from 'react-redux'

import Recommend from './components/Recommend'
import Writter from './components/Writter'
import List from './components/List'
import Banner from './components/Banner'

import { actionCreators } from './store'
import * as home from './style'

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handelScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
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
        {this.props.isToTop ? (
          <home.BackTop onClick={() => this.handelScrollTop()}>
            返回顶部
          </home.BackTop>
        ) : null}
      </home.HomeWrapper>
    )
  }
}

const mapState = state => ({
  isToTop: state.getIn(['home', 'showScroll'])
})

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(
  mapState,
  mapDispatch
)(Home)
