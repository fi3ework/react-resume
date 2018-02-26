import React, { Component } from 'react'
import style from './style.scss'
import placeholder from './mikasa.jpg'

export default class componentName extends Component {
  upload = () => {
    let file = this.uploadNode.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    let that = this
    reader.onload = function(e) {
      console.log(this.result)
      let src = this.result
      that.img.setAttribute('src', src)
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
        <input
          type="file"
          accept="image/gif,image/jpeg,image/jpg,image/png"
          ref={(node) => { this.uploadNode = node }}
          className={style.input}
          onChange={this.upload}
        />
        <img className={style.avatar}
          src={placeholder}
          ref={(node) => { this.img = node }}
          onClick={() => { console.log(233) }}
        />
      </div>
    )
  }
}
