import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as detail from './style'
import { actions } from './store'

class Detail extends React.PureComponent {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

  render() {
    const { title, content } = this.props
    return (
      <detail.DetailWrapper>
        <detail.Header>{title}</detail.Header>
        <detail.Content dangerouslySetInnerHTML={{ __html: content }} />
      </detail.DetailWrapper>
    )
  }
}

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actions.getDetail(id))
  }
})

export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail))
