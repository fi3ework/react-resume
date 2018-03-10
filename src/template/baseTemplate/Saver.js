import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'
import fileSaver from 'file-saver'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FontIcon from 'material-ui/FontIcon'
import style from './style.scss'
import cs from 'classnames'

export default class componentName extends Component {
  constructor() {
    super()
    this.state = {
      isEncoding: false
    }
  }

  componentDidMount = () => {
    this.setState({
      toRenderElement: document.querySelector('.exportRoot')
    })
  }

  getTimeStampStr = () => {
    let date = new Date()
    let year = date.getFullYear()
    let month = String(date.getMonth()).padStart(2, '0')
    let day = String(date.getDay()).padStart(2, '0')
    let hour = String(date.getHours()).padStart(2, '0')
    let minute = String(date.getMinutes()).padStart(2, '0')
    let second = String(date.getSeconds()).padStart(2, '0')
    return ` - ${year}${month}${day}${hour}${minute}${second}`
  }

  appendDateStamp = (str) => {
    let dotIndex = str.indexOf('.')
    if (dotIndex === -1) {
      return str
    }
    console.log('dddd')
    return str.slice(0, dotIndex) + this.getTimeStampStr() + str.slice(dotIndex)
  }

  hideSidebar(saveFile) {
    document.body.classList.add('hide-scrollbar')
    document.body.classList.remove('hide-scrollbar')
  }

  toPNG = () => {
    this.setState({
      isEncoding: true
    })
    let that = this
    document.body.classList.add('hide-scrollbar')
    html2canvas(this.state.toRenderElement).then(function (canvas) {
      canvas.toBlob((blob) => {
        fileSaver.saveAs(blob, that.appendDateStamp('react-resume.png'))
      })
      that.setState({
        isEncoding: false
      })
    })
    document.body.classList.remove('hide-scrollbar')
  }

  toPDF = () => {
    this.setState({
      isEncoding: true
    })
    let that = this
    document.body.classList.add('hide-scrollbar')
    html2canvas(this.state.toRenderElement).then(function (canvas) {
      return canvas.toDataURL()
    }).then(function (dataURL) {
      let doc = new JsPDF('p', 'pt', 'a4')
      doc.addImage(dataURL, 'png', 0, 0, 600, 842)
      doc.save(that.appendDateStamp('react-resume.pdf'))
      that.setState({
        isEncoding: false
      })
    })
    document.body.classList.remove('hide-scrollbar')
  }

  toHTML = () => {
    this.setState({
      isEncoding: true
    })

    let clonedDoc = document.cloneNode(true);
    // disable contentEditable
    [...clonedDoc.querySelectorAll('[contentEditable="true"]')].forEach(node => {
      node.contentEditable = false
    })
    // remove header and footer
    clonedDoc.querySelector('.saverWrapper').remove()
    clonedDoc.querySelector('.helperWrapper').remove()

    document.body.classList.add('hide-scrollbar')
    let oriBg = document.querySelector('.bgImg')
    let clonedBg = clonedDoc.querySelector('.bgImg')
    html2canvas(oriBg).then(function (canvas) {
      let base64 = canvas.toDataURL()
      clonedBg.setAttribute('src', base64)
      document.body.classList.remove('hide-scrollbar')
    }).then(
      () => {
        fileSaver.saveAs(
          new Blob(
            [(new XMLSerializer()).serializeToString(clonedDoc)]
            , { type: 'application/xhtml+xml;charset=' + document.characterSet }
          )
          , this.appendDateStamp('react-resume.html')
        )
        this.setState({
          isEncoding: false
        })
      }
    )
  }

  render() {
    return (
      <div className={cs({
        saverWrapper: true,
        [style.saverWrapper]: true
      })}>
        <RaisedButton
          label="EXPORT TO PNG"
          icon={<FontIcon className="fa fa-image" style={{ fontSize: '20px' }} />}
          onClick={this.toPNG}
        />
        <RaisedButton
          label="EXPORT TO PDF"
          icon={<FontIcon className="fa fa-file-pdf" style={{ fontSize: '18px' }} />}
          onClick={this.toPDF}
          style={{ marginLeft: '10px' }}
        />
        <RaisedButton
          label="EXPORT TO HTML"
          icon={<FontIcon className="fas fa-paperclip" style={{ fontSize: '18px' }} />}
          onClick={this.toHTML}
          style={{ marginLeft: '10px' }}
        />
        <Dialog
          title="🚧"
          modal={true}
          open={this.state.isEncoding}
        >
          😚 FILE IS BEING TRANSCODED, PLEASE WAIT.
        </Dialog>
      </div>
    )
  }
}
