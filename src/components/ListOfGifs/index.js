import React from 'react'

import Gif from '../Gif'

const ListOfGifs = ({ gifs }) => {

  return <> {
    gifs.map(({ id, title, url }) => 
      <Gif
        id={id}  
        key={id}
        title={title}
        url={url}
      />
    )
  } </>
}

export default ListOfGifs
