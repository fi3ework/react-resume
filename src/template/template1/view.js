import React, { Component } from 'react'
import A4 from '../baseTemplate'
import { EditableText, List, Avatar } from '../../core'
import loremIpsum from 'lorem-ipsum'
import style from './style.scss'

export default class componentName extends Component {
  render() {
    return (
      <A4>
        <div className={style.profile}>
          <Avatar />
          <EditableText
            tagName="div"
            html={'Wee'}
          />
          <EditableText
            tagName="div"
            html={'26'}
          />
          <List>
            <EditableText
              tagName="div"
              html={loremIpsum()}
            />
          </List>
        </div>
        <div className={style.experience}>
          <div className={style.infoCol}>
            <EditableText
              tagName="h2"
              html="Education"
            />
            <List>
              <EditableText
                tagName="div"
                html={'BeijingUniver'}
              />
            </List>
          </div>
          <div className={style.infoCol}>
            <EditableText
              tagName="h2"
              html="教育经历"
            />
            <List>
              <EditableText
                tagName="div"
                html={loremIpsum()}
              />
            </List>
          </div>
        </div>
      </A4>
    )
  }
}
