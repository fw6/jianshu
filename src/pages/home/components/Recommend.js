import React from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends React.PureComponent {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {list.map(item => (
          <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
        ))}
      </RecommendWrapper>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState)(Recommend)
