import style from './style.scss'
import React, { Component } from 'react'
import cs from 'classnames'
import domtoimage from 'dom-to-image'
import fileSaver from 'file-saver'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FontIcon from 'material-ui/FontIcon'
import { Base64 } from 'js-base64'
import img2pdf from 'jspdf'

export default class componentName extends Component {
  componentDidMount = () => {
    let menus = document.getElementsByClassName('menu')
    console.log(menus)
    document.getElementsByClassName('a4')[0].addEventListener('click', (e) => {
      [...menus].forEach((item) => {
        item.style.display = 'none'
      })
    })
  }

  toPNG = () => {
    let element = document.getElementsByClassName('exportRoot')[0]
    domtoimage.toBlob(element)
      .then(function (blob) {
        fileSaver.saveAs(blob, 'react-resume.png')
      })
  }

  toPDF = () => {
    let element = document.getElementsByClassName('exportRoot')[0]
    domtoimage.toBlob(element)
      .then(function (blob) {
        fileSaver.saveAs(blob, 'react-resume.png')
      })
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className={style.buttonWrapper}>
            <RaisedButton
              label="EXPORT TO PNG"
              icon={<FontIcon className="fa fa-image" style={{ fontSize: '20px' }} />}
              onClick={this.toPNG}
            />
            <RaisedButton
              label="EXPORT TO PDF"
              onClick={this.toPNG}
              icon={<FontIcon className="fa fa-file-pdf" style={{ fontSize: '18px' }} />}
              style={{ marginLeft: '10px' }}
            />
          </div>
          <article
            className={cs({
              [style.a4]: true,
              a4: true
            })}>
            {this.props.children}
          </article>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
