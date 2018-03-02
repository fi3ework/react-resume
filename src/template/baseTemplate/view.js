import style from './style.scss'
import React, { Component } from 'react'
import cs from 'classnames'
import fileSaver from 'file-saver'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import FontIcon from 'material-ui/FontIcon'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'

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
    let menus = document.getElementsByClassName('menu')
    document.body.addEventListener('click', (e) => {
      console.log('click');
      [...menus].forEach((item) => {
        item.style.display = 'none'
      })
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
    }).then(function(dataURL) {
      let doc = new JsPDF('p', 'pt', 'a4')
      doc.addImage(dataURL, 'png', -5, 0, 600, 842)
      doc.save('react-resume.pdf')
      self.setState({
        isEncoding: false
      })
    })

  }

  render() {
    const actions =
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
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
              icon={<FontIcon className="fa fa-file-pdf" style={{ fontSize: '18px' }} />}
              onClick={this.toPDF}
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
          <Dialog
            title="🚧"
            // actions={actions}
            modal={true}
            open={this.state.isEncoding}
          >
           😚 File is encoding, please wait...
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
