import React, { Component } from 'react'
import style from './style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import cs from 'classnames'
import ph from './placeholder.jpg'
import FileReaderInput from 'react-file-reader-input'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnHonver: false,
      imgSrc: ph
    }
  }

  _arrayBufferToBase64(buffer) {
    let binary = ''
    let bytes = new Uint8Array(buffer)
    let len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }

  upload = (e, results) => {
    let reader = results[0][0].target
    let that = this
    let base64 = 'data:image/jpg;base64, ' + this._arrayBufferToBase64(reader.result)
    that.img.setAttribute('src', base64)
  }

  render() {
    return (
      <div
        className={style.headerPicWrapper}
        style={this.props.style}
        onMouseEnter={() => this.setState({ isOnHonver: true })}
        onMouseLeave={() => this.setState({ isOnHonver: false })}
      >
        <img
          className={cs(
            {
              [style.bgImg]: true,
              bgImg: true
            }
          )}
          src={this.state.imgSrc}
          ref={(node) => { this.img = node }}
        />
        <FileReaderInput
          as="buffer"
          onChange={this.upload}>
          <RaisedButton
            label="CHANGE PIC"
            className={cs(
              {
                [style.changePic]: true,
                changePic: true
              }
            )}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              display: this.state.isOnHonver ? 'block' : 'none',
              zIndex: 999,
            }}
          />
        </FileReaderInput>
        <div className={style.children}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
