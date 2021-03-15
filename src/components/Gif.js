import React from 'react'
import './Gif.css'

const Gif = ({ id, title, url}) => {
  return (
    <div key={id} className="Gif">
      <small>{id}</small>
      <h4>{title}</h4>
      <img alt={title}  src={url} />
  </div>
  )
}

export default Gif
