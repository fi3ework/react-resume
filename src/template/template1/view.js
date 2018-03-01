import React, { Component } from 'react'
import A4 from '../baseTemplate'
import { EditableText, List, RowTexts, HeaderPic } from '../../core'
import loremIpsum from 'lorem-ipsum'
import style from './style.scss'
import cs from 'classnames'

export default class componentName extends Component {
  render() {
    return (
      <A4>
        <article className={cs({
          [style.cv]: true,
          exportRoot: true
        })}>
          <HeaderPic style={{
            padding: '40px 40px 40px 40px'
          }}>
            <header className={style.header}>
              <div className={style.nameAndProfession}>
                <div className={style.names}>
                  <EditableText
                    tagName="h1"
                    html={'Wee'}
                    className={style.name}
                  />
                  <EditableText
                    tagName="h2"
                    html={'fi3ework'}
                    className={style.nickname}
                  />
                </div>
                <EditableText
                  tagName="p"
                  html={'Frond-end engineer'}
                  className={style.profession}
                />
              </div>
              <div className={style.profileAndContact}>
                <div className={style.profile}>
                  <EditableText
                    tagName="span"
                    html={'男 / 1992.2'}
                    className={style.info}
                  />
                  <EditableText
                    tagName="span"
                    html={'北京理工大学 · 仪器科学与技术'}
                    className={style.info}
                  />
                  <EditableText
                    tagName="span"
                    html={'硕士 / 2017年毕业'}
                    className={style.info}
                  />
                </div>
                <div className={style.contact}>
                  <EditableText
                    tagName="span"
                    html={'1851529****'}
                    className={style.info}
                  />
                  <EditableText
                    tagName="span"
                    html={'8058*****@qq.com'}
                    className={style.info}
                  />
                  <EditableText
                    tagName="span"
                    html={'github.com/fi3ework'}
                    className={style.info}
                  />
                </div>
              </div>
            </header>
          </HeaderPic>

          <main className={style.main}>
            <div className={style.sections}>
              <section className={style.section}>
                <EditableText
                  tagName="h2"
                  html={'Education'}
                  className={style.sectionTitle}
                />
                <List className={style.list}>
                  <RowTexts
                    text1="2010.8 - 2014.8"
                    text2="Tsinghua University"
                    text3="Computer Science"
                    className={style.rowTexts}
                  />
                  <RowTexts
                    text1="2014.8 - 2017.3"
                    text2="Peking University"
                    text3="Computer Science"
                    className={style.rowTexts}
                  />
                </List>
              </section>
              <section className={style.section}>
                <EditableText
                  tagName="h2"
                  html={'Internship'}
                  className={style.sectionTitle}
                />
                <List className={style.list}>
                  <div className={style.listItem}>
                    <RowTexts
                      text1="COMPANY-A"
                      text2="Front-end engineer"
                      text3="2017.4 - 2017.6"
                      className={style.rowTexts}
                    />
                    <EditableText
                      tagName="span"
                      html={loremIpsum({
                        count: 5,
                        units: 'sentences'
                      })}
                    />
                  </div>
                  <div className={style.listItem}>
                    <RowTexts
                      text1="COMPANY-B"
                      text2="Front-end engineer"
                      text3="2017.7 - 2017.11"
                      className={style.rowTexts}
                    />
                    <EditableText
                      tagName="span"
                      html={loremIpsum({
                        count: 5,
                        units: 'sentences'
                      })}
                    />
                  </div>
                </List>
              </section>
              <section className={style.section}>
                <EditableText
                  tagName="h2"
                  html={'Projects'}
                  className={style.sectionTitle}
                />
                <List className={style.list}>
                  <div className={style.listItem}>
                    <RowTexts
                      text1="hexo-theme-archer"
                      text2="JavsScript"
                      className={style.rowTexts}
                    />
                    <EditableText
                      tagName="span"
                      html={loremIpsum({
                        count: 5,
                        units: 'sentences'
                      })}
                    />
                  </div>
                  <div className={style.listItem}>
                    <RowTexts
                      text1="react-resume"
                      text2="React"
                      className={style.rowTexts}
                    />
                    <EditableText
                      tagName="span"
                      html={loremIpsum({
                        count: 5,
                        units: 'sentences'
                      })}
                    />
                  </div>
                </List>
              </section>
              <section className={style.section}>
                <EditableText
                  tagName="h2"
                  html={'Skills And Qualifications'}
                  className={style.sectionTitle}
                />
                <List className={style.list}>
                  <EditableText
                    tagName="span"
                    html={'Proficient understanding of web markup, including HTML5, CSS3'}
                  />
                  <EditableText
                    tagName="span"
                    html={'Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS'}
                  />
                  <EditableText
                    tagName="span"
                    html={'Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery'}
                  />
                  <EditableText
                    tagName="span"
                    html={'Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image. Familiarity with tools such as as Gimp or Photoshop is a plus.'}
                  />
                </List>
              </section>
            </div>
          </main>
        </article>
      </A4>
    )
  }
}
