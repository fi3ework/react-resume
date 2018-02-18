import React, { Component } from 'react'

class EditableText extends Component {
  emit = (e) => {
    let html = this.textNode.innerHTML
    this.props.onChange(html)
  }

  blur = (e) => {
    console.log('blur')
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur()
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
        onBlur: this.blur,
        dangerouslySetInnerHTML: { __html: html }
      })
    return text
  }
}


export default EditableText