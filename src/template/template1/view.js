import React, { Component } from 'react'
import A4 from '../baseTemplate'
import { EditableText, List, RowTexts } from '../../core'
import loremIpsum from 'lorem-ipsum'
import style from './style.scss'

export default class componentName extends Component {
  render() {
    return (
      <A4>
        <div className={style.main}>
          <EditableText
            tagName="h1"
            html={'fi3ework'}
            className={style.name}
          />
          <div className={style.profile}>
            <EditableText
              tagName="span"
              html={'出生年月: 1992.2'}
            />
            <EditableText
              tagName="span"
              html={'电话号码: 18512345678'}
            />
            <EditableText
              tagName="span"
              html={'邮箱：876543210@qq.com'}
            />
          </div>
          <div className={style.education}>
            <EditableText
              tagName="h2"
              html={'Education'}
            />
            <List>
              <RowTexts
                text1="2010.8 - 2014.8"
                text2="Tsinghua University"
                text3="Computer Science"
              />
              <RowTexts
                text1="2014.8 - 2017.3"
                text2="Peking University"
                text3="Computer Science"
              />
            </List>
          </div>
          <div className={style.experience}>
            <EditableText
              tagName="h2"
              html={'INTERNSHIP'}
            />
            <List>
              <div className={style.experienceItem}>
                <RowTexts
                  text1="COMPANY-A"
                  text2="Front-end engineer"
                  text3="2017.4 - 2017.6"
                />
                <EditableText
                  tagName="span"
                  html={loremIpsum({
                    count: 8,
                    units: 'sentences'
                  })}
                />
              </div>
              <div className={style.experienceItem}>
                <RowTexts
                  text1="COMPANY-B"
                  text2="Front-end engineer"
                  text3="2017.7 - 2017.11"
                />
                <EditableText
                  tagName="span"
                  html={loremIpsum({
                    count: 8,
                    units: 'sentences'
                  })}
                />
              </div>
            </List>
          </div>
          <div className={style.experience}>
            <EditableText
              tagName="h2"
              html={'Projects'}
            />
            <List>
              <div className={style.experienceItem}>
                <RowTexts
                  text1="hexo-theme-archer"
                  text2="JavsScript"
                />
                <EditableText
                  tagName="span"
                  html={loremIpsum({
                    count: 8,
                    units: 'sentences'
                  })}
                />
              </div>
              <div className={style.experienceItem}>
                <RowTexts
                  text1="react-resume"
                  text2="React"
                />
                <EditableText
                  tagName="span"
                  html={loremIpsum({
                    count: 8,
                    units: 'sentences'
                  })}
                />
              </div>
            </List>
          </div>
          <div className={style.skill}>
            <EditableText
              tagName="h2"
              html={'Skill'}
            />
            <List>
              <EditableText
                tagName="span"
                html={'HTML/CSS/JavaScript'}
              />
              <EditableText
                tagName="span"
                html={'jQuery/Sass/Bootstrap'}
              />
              <EditableText
                tagName="span"
                html={'React/Vue/AngularJS'}
              />
            </List>
          </div>
        </div>
      </A4>
    )
  }
}
