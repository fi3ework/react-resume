import React, { Component } from 'react'
import { EditableText, List } from '../../core'
import loremIpsum from 'lorem-ipsum'

export default class componentName extends Component {
  render() {
    return (
      <article>
        <h2>教育经历</h2>
        <List>
          <EditableText
            disabled
            tagName="div"
            onChange={(value) => { console.log(value) }}
            html={loremIpsum()}
          />
        </List>
        <h2>工作经历</h2>
        <List>
          <EditableText
            disabled
            tagName="div"
            onChange={(value) => { console.log(value) }}
            html={loremIpsum()}
          />
        </List>
      </article>
    )
  }
}
