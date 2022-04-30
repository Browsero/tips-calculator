import React from 'react'

export default function Title(props) {
  return (
    <h1 className={props.class}>{props.children}</h1>
  )
}
