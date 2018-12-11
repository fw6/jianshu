import Axios from 'axios'
import * as types from './actionTypes'

const changeHomeData = data => ({
  type: types.CHANGE_HOME_DATA,
  articleList: data.articleList,
  recommendList: data.recommendList
})

const addHomeList = (data, nextPage) => ({
  type: types.ADD_ARTICLE_DATA,
  list: data,
  nextPage
})

export const getHomeInfo = () => {
  return dispatch => {
    Axios.get('/api/home.json').then(res => {
      if (res.data.success) {
        const data = res.data.data
        dispatch(changeHomeData(data))
      }
    })
  }
}

export const getMoreList = page => {
  return dispatch => {
    Axios.get('/api/homeList.json?page=' + page).then(res => {
      if (res.data.success) {
        const data = res.data.data
        dispatch(addHomeList(data, page + 1))
      }
    })
  }
}

export const toggleTopShow = isShow => {
  return dispatch => {
    const action = {
      type: types.CHANGE_SCROLL_SHOW,
      isShow
    }
    dispatch(action)
  }
}
