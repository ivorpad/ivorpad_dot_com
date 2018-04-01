import React from 'react'

const Button = (props) => {
  return (
    <button className={`btn-primary ${props.color} hover:${props.hover}`}><span className="uppercase text-xs font-bold">{props.children}</span></button>
  )
}

export default Button
