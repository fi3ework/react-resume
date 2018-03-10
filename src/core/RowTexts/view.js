import React from 'react'
import EditableText from '../EditableText'

export default (props) => {
  let textProps = Object.keys(props).filter(key => (
    /text\d*/.test(key)
  ))
  let textCount = textProps.length
  let children = textProps.map((key, index) => (
    <EditableText
      style={{
        width: `${100 / textCount}%`,
        textAlign: index === 0 ? 'start' :
        index === textCount - 1 ? 'end' : 'center',
      }}
      key={key}
      html={props[key]}
    />
  ))
  return <div {...props}>{children}</div>
}