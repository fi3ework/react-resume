import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'
import fileSaver from 'file-saver'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FontIcon from 'material-ui/FontIcon'
import style from './style.scss'

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

  toPNG = () => {
    this.setState({
      isEncoding: true
    })
    let self = this
    html2canvas(this.state.toRenderElement).then(function (canvas) {
      canvas.toBlob((blob) => {
        fileSaver.saveAs(blob, 'react-resume.png')
      })
      self.setState({
        isEncoding: false
      })
    })
  }

  toPDF = () => {
    this.setState({
      isEncoding: true
    })
    let self = this
    html2canvas(this.state.toRenderElement).then(function (canvas) {
      console.log(canvas)
      return canvas.toDataURL()
    }).then(function (dataURL) {
      let doc = new JsPDF('p', 'pt', 'a4')
      doc.addImage(dataURL, 'png', -5, 0, 600, 842)
      doc.save('react-resume.pdf')
      self.setState({
        isEncoding: false
      })
    })
  }

  render() {
    return (
      <div className={style.buttonWrapper}>
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
