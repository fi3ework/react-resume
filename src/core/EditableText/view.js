import React, { Component } from 'react'
import style from './style.scss'

class EditableText extends Component {
  componentDidMount = () => {
    this.encodeMD()
  }

  avoidEmpty = () => {
    if (this.textNode.innerHTML === '') {
      this.textNode.innerHTML = '⚠️'
    }
  }

  encodeMD = () => {
    let unparsed = this.textNode.innerHTML
    this.textNode.innerHTML = unparsed.replace(/\[(.*)]\((.*)\)/g, (match, p1, p2) => {
      return `<span class="linked-editable">
      <i class="iconfont icon-link1"></i>
      <a href="${p2}" target="_blank">${p1}</a>
      </span>`
    })
  }

  decodeMD = () => {
    [...this.textNode.querySelectorAll('.linked-editable')].forEach(currLink => {
      let aTag = currLink.querySelector('a')
      currLink.outerHTML = `[${aTag.innerHTML}](${aTag.href})`
    })
  }

  onBlur = () => {
    this.encodeMD()
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(this.textNode.innerHTML)
    }
  }

  focus = () => {

  }

  blur = () => {
    this.textNode.innerHTML = this.mdParse(this.textNode.innerHTML)
  }

  emit = (e) => {
    let html = this.textNode.innerHTML
    if (typeof this.props.onInput === 'function') {
      this.props.onInput(html)
    }
    this.avoidEmpty()
  }

  render() {
    let { tagName, html, ...props } = this.props
    let text = React.createElement(
      tagName || 'span', {
        ...props,
        ref: (node) => { this.textNode = node },
        contentEditable: !this.props.disabled,
        onInput: this.emit,
        onFocus: this.decodeMD,
        onBlur: this.onBlur,
        spellCheck: 'false',
        dangerouslySetInnerHTML: { __html: html },
      })
    return text
  }
}


export default EditableText