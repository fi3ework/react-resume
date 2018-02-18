import style from './style.scss'
import React from 'react'

export default (props) => {
  return (
    <article className={style.a4}>
      {props.children}
    </article>
  )
}