import React, { Component } from 'react'
import style from './style.scss'
class EditableText extends Component {

  avoidEmpty = () => {
    if (this.textNode.innerHTML === '') {
      this.textNode.innerHTML = '⚠️'
    }
  }

  encodeMD = () => {
    let unparsed = this.textNode.innerHTML
    console.log(unparsed)
    this.textNode.innerHTML = unparsed.replace(/\[(.*)]\((.*)\)/g, (match, p1, p2) => {
      return `<a href="${p2}" target="_blank">${p1}</a>`
    })
  }

  decodeMD = () => {
    [...this.textNode.querySelectorAll('a')].forEach(currA => {
      currA.outerHTML = `[${currA.innerHTML}](${currA.href})`
    })
  }

  focus = () => {

  }

  blur = () => {
    console.log('blur')
    this.textNode.innerHTML = this.mdParse(this.textNode.innerHTML)
  }

  emit = (e) => {
    let html = this.textNode.innerHTML
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(html)
      this.avoidEmpty()
    } else {
      this.avoidEmpty()
    }
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
        onBlur: this.encodeMD,
        spellCheck: 'false',
        dangerouslySetInnerHTML: { __html: html }
      })
    return text
  }
}


export default EditableText