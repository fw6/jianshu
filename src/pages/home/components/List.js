import React from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class List extends React.Component {
  render() {
    const { list, page, getMoreList } = this.props
    return (
      <>
        {list.map(item => (
          <ListItem key={item.get('id')}>
            <img
              className="pic"
              src={item.get('imgUrl')}
              alt={item.get('title')}
            />
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
        ))}
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = dispatch => ({
  getMoreList(page) {
    console.log(page)
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(
  mapState,
  mapDispatch
)(List)
