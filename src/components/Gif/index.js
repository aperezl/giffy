import React from 'react'
import './Gif.css'

const Gif = ({ id, title, url}) => {
  return (
    <a href={`#${id}`} key={id} className="Gif">
      <small>{id}</small>
      <h4>{title}</h4>
      <img alt={title}  src={url} />
  </a>
  )
}

export default Gif
