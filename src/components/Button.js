import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="f6 lh-copy ba b--black pv2 ph4 br2 bw1 tracked pointer bg-animate hover-bg-black hover-white items-center">{props.children}</button>
    </div>
  )
}

export default Button
