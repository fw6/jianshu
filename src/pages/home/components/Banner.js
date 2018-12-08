import React from 'react'
import uuid from 'uuid'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { BannerWrapper } from '../style'

class Banner extends React.Component {
  state = {
    items: [
      {
        id: uuid(),
        text: 'Number 1 One'
      },
      {
        id: uuid(),
        text: 'Number 2 Two'
      },
      {
        id: uuid(),
        text: 'Number 3 Three'
      }
    ]
  }
  render() {
    return (
      <BannerWrapper>
        <TransitionGroup className="banner">
          {this.state.items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              appear={true}
              classNames="banner"
              onEntered={el => {
                el.style.visibility = 'visible'
              }}
            >
              <div className="item">{text}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </BannerWrapper>
    )
  }
}

export default Banner
