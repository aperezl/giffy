import React, { useState, useEffect } from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import Spinner from '../../components/Spinner'
import getGifs from '../../services/getGifs'

const SearchResult = ({ params }) => {

  const [loading, setLoading] = useState(false)

  const { keyword } = params
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  if (loading) return <Spinner />

  return (
    <div>
      <ListOfGifs gifs={gifs} />
    </div>
  )
}

export default SearchResult
