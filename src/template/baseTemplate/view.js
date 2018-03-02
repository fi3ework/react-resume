import style from './style.scss'
import React, { Component } from 'react'
import cs from 'classnames'
import fileSaver from 'file-saver'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FontIcon from 'material-ui/FontIcon'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default class componentName extends Component {


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
    console.log(this.state)

    html2canvas(this.state.toRenderElement).then(function (canvas) {
      canvas.toBlob((blob) => {
        fileSaver.saveAs(blob, 'react-resume.png')
      })
    })
  }

  toPDF = () => {
    html2canvas(this.state.toRenderElement).then(function (canvas) {
      // let ctx = canvas.getContext('2d')
      // ctx.mozImageSmoothingEnabled = false
      // ctx.webkitImageSmoothingEnabled = false
      // ctx.msImageSmoothingEnabled = false
      // ctx.imageSmoothingEnabled = false
      console.log(canvas)
      return canvas.toDataURL()
    }).then(function(dataURL) {
      let doc = new JsPDF('p', 'pt', 'a4')
      doc.addImage(dataURL, 'png', -5, 0, 600, 900)
      doc.save('sample-file.pdf')
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
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
