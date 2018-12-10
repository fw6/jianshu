import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  articlePage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case types.ADD_ARTICLE_DATA:
      return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.list)),
        articlePage: action.nextPage
      })
    default:
      return state
  }
}
