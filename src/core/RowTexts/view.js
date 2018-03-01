import React from 'react'
import EditableText from '../EditableText'

export default (props) => {
  let children = Object.keys(props).filter(key => (
    /text\d*/.test(key)
  )).map(key => (
    <EditableText
      key={key}
      html={props[key]}
    />
  ))
  return <div {...props}>{children}</div>
}