import React, { Component } from 'react'
import A4 from '../baseTemplate'
import { EditableText, List, RowTexts, HeaderPic } from '../../core'
import loremIpsum from 'lorem-ipsum'
import style from './style.scss'
import cs from 'classnames'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cv: {
        name: 'Wee',
        nickname: 'fi3ework',
      }
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {

  }

  render() {
    return (
      <A4>
        <article className={cs({
          [style.cv]: true,
          exportRoot: true
        })}>
          <HeaderPic style={{
            padding: '20px 40px 40px 40px'
          }}>
            <header className={style.header}>
              <div className={style.nameAndProfession}>
                <div className={style.names}>
                  <EditableText
                    tagName="h1"
                    html={this.state.cv.name}
                    className={style.name}
                    onInput={(name) => { console.log('new name ' + name) }}
                  />
                  <EditableText
                    tagName="h2"
                    html={this.state.cv.nickname}
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
                <List className={style.profile}>
                  <EditableText
                    tagName="span"
                    html={'Male / China / 1992.2'}
                    className={style.info}
                  />
                  <EditableText
                    tagName="span"
                    html={'Beijing Institute of Technology / Instrument science and technology'}
                    className={style.info}
                  />
                  <EditableText
                    tagName="span"
                    html={'master / graduated in 2017'}
                    className={style.info}
                  />
                </List>
                <List className={style.contact}>
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
                </List>
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
                <List className={style.educationList}>
                  <RowTexts
                    text1="2010.8 - 2014.8"
                    text2="Beijing Institute of Technology"
                    text3="Major-A"
                    className={style.rowTexts}
                  />
                  <RowTexts
                    text1="2014.8 - 2017.3"
                    text2="Beijing Institute of Technology"
                    text3="Major-B"
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
                <List className={style.massiveList}>
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
                <List className={style.massiveList}>
                  <div className={style.listItem}>
                    <RowTexts
                      text1="hexo-theme-archer"
                      text2="JavsScript"
                      className={style.rowTexts}
                    />
                    <EditableText
                      tagName="span"
                      html={loremIpsum({
                        count: 7,
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
                        count: 7,
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
                <List className={
                  cs({
                    [style.massiveList]: true,
                    [style.skillList]: true
                  })
                }>
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
                    html={'Deep knowledge of ES6, CSS and Browser capabilities (you love MDN, CanIUse)'}
                  />
                  <EditableText
                    tagName="span"
                    html={'Championed the usage of JQuery across the Provide family of brands.'}
                  />
                  <EditableText
                    tagName="span"
                    html={'Experience with front-end build systems (Node.js, WebPack, Babel, etc.)'}
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
