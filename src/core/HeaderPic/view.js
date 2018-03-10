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

  upload = (e, results) => {
    console.log('uploaded')
    console.log(results)
    // let file = results[0][1]
    let reader = results[0][0].target
    console.log(reader.result)
    // let file = this.uploadNode.files[0]
    // let reader = new FileReader()
    // reader.readAsDataURL(file)
    let that = this

    let blob = new Blob([reader.result], { type: 'image/jpeg' })
    console.log(blob)
    // reader.onload = function (e) {
    console.log(e)
    let urlCreator = window.URL || window.webkitURL
    let imageUrl = urlCreator.createObjectURL(blob)
    let src = imageUrl
    that.img.setAttribute('src', src)
    // }
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
