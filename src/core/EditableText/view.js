import React, { Component } from 'react'

class EditableText extends Component {

  avoidEmpty = () => {
    if (this.textNode.innerHTML === '') {
      this.textNode.innerHTML = '⚠️'
    }
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
        spellCheck: 'false',
        dangerouslySetInnerHTML: { __html: html }
      })
    return text
  }
}


export default EditableText