import React from 'react'

const Gif = ({ id, title, url}) => {
  return (
    <div key={id}>
      <small>{id}</small>
      <h4>{title}</h4>
      <img alt={title}  src={url} />
  </div>
  )
}

export default Gif
