import React from 'react'
import './Gif.css'
import { Link } from 'wouter'

const Gif = ({ id, title, url}) => {
  return (
    <Link to={`/gif/${id}`} key={id} className="Gif">
      <small>{id}</small>
      <h4>{title}</h4>
      <img alt={title}  src={url} />
    </Link>
  )
}

export default Gif
