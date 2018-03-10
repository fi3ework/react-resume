import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import style from './style.scss'
import FontIcon from 'material-ui/FontIcon'
import cs from 'classnames'
const helperStyle = {
  width: 1240,
  margin: '0 auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 30px 20px 30px',
  color: '#aaa',
  fontSize: '16px'
}

export default class componentName extends Component {
  render() {
    return (
      <div className={cs({
        helperWrapper: true,
        [style.helperWrapper]: true
      })}>

        <Paper style={helperStyle} zDepth={2} rounded={false}>
          <FontIcon className="fa fa-mouse-pointer" style={{ fontSize: '16px', color: '#aaa', marginRight: 10 }} />
          Right click on a list item to
          insert before ➕📍/
          insert after 📍➕ /
          move up 🔼 /
          move down 🔽 /
          remove ❌
          items.
        </Paper>
        <div className={style.copyRightWrapper}>
          <a href={'https://github.com/fi3ework/react-resume'}
            style={{ textDecoration: 'none' }}
            target="_black"
          >
            <FontIcon
              className="fab fa-github"
              style={{ fontSize: '40px', color: '#aaa', margin: '20px 10px 0 0' }}
            />
          </a>
          <a className="github-button" href="https://github.com/fi3ework/react-resume" data-icon="octicon-star" data-show-count="true" aria-label="Star fi3ework/react-resume on GitHub">Star</a>
        </div>
      </div>
    )
  }
}
