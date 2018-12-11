import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const addArticleData = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.list)),
    articlePage: action.nextPage
  })
}

const changeScrollShow = (state, action) => {
  return state.set('showScroll', action.isShow)
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case types.ADD_ARTICLE_DATA:
      return addArticleData(state, action)
    case types.CHANGE_SCROLL_SHOW:
      return changeScrollShow(state, action)
    default:
      return state
  }
}
