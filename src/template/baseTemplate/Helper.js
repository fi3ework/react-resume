import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import style from './style.scss'
import FontIcon from 'material-ui/FontIcon'

const paperStyle = {
  width: 1240,
  margin: '0 auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: '30px 30px 30px 30px',
  color: '#aaa',
  fontSize: '20px'
}

export default class componentName extends Component {
  render() {
    return (
      <div className={style.helperWrapper}>
        <Paper style={paperStyle} zDepth={2} rounded={false}>
          <FontIcon className="fa fa-mouse-pointer" style={{ fontSize: '20px', color: '#aaa', marginRight: 10 }} />
          Right click on a list item to add/remove/reorder items.
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
