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

  hideSidebar(saveFile) {
    document.body.classList.add('hide-scrollbar')
    document.body.classList.remove('hide-scrollbar')
  }

  exportHTML(name, data) {
    let urlObject = window.URL || window.webkitURL || window
    let export_blob = new Blob([data])
    fileSaver.saveAs(export_blob, 'react-resume.html')
    let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    save_link.href = urlObject.createObjectURL(export_blob)
    save_link.download = name
  }

  toHTML = () => {
    let docClone = document.cloneNode(true);
    // disable contentEditable
    [...docClone.querySelectorAll('[contentEditable="true"]')].forEach(node => {
      node.contentEditable = false
    })
    // remove header and footer
    docClone.querySelector('.saverWrapper').remove()
    docClone.querySelector('.helperWrapper').remove()
    docClone.querySelector('input').remove()
    fileSaver.saveAs(
      new Blob(
        [(new XMLSerializer()).serializeToString(docClone)]
        , { type: 'application/xhtml+xml;charset=' + document.characterSet }
      )
      , 'react-resume.html'
    )
  }

  toPNG = () => {
    this.setState({
      isEncoding: true
    })
    let self = this
    document.body.classList.add('hide-scrollbar')
    html2canvas(this.state.toRenderElement).then(function (canvas) {
      canvas.toBlob((blob) => {
        fileSaver.saveAs(blob, 'react-resume.png')
      })
      self.setState({
        isEncoding: false
      })
    })
    document.body.classList.remove('hide-scrollbar')
  }

  toPDF = () => {
    this.setState({
      isEncoding: true
    })
    let self = this
    document.body.classList.add('hide-scrollbar')
    html2canvas(this.state.toRenderElement).then(function (canvas) {
      console.log(canvas)
      return canvas.toDataURL()
    }).then(function (dataURL) {
      let doc = new JsPDF('p', 'pt', 'a4')
      doc.addImage(dataURL, 'png', 0, 0, 600, 842)
      doc.save('react-resume.pdf')
      self.setState({
        isEncoding: false
      })
    })
    document.body.classList.remove('hide-scrollbar')
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
          // actions={actions}
          modal={true}
          open={this.state.isEncoding}
        >
          😚 File is encoding, please wait...
        </Dialog>
      </div>
    )
  }
}
