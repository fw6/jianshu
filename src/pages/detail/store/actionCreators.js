import Axios from 'axios'
import { types } from '../store'

const changeDetail = data => ({
  type: types.CHANGE_DETAIL,
  title: data.title,
  content: data.content
})

export const getDetail = id => {
  return dispatch => {
    Axios.get('/api/detail.json?id=' + id).then(res => {
      if (res.data.success) {
        const data = res.data.data
        dispatch(changeDetail(data))
      }
    })
  }
}
