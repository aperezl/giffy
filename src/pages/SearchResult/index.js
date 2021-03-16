import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import Spinner from '../../components/Spinner'
import { useGifs } from '../../hooks/useGifs'

const SearchResult = ({ params }) => {

  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })
  console.log('render')
  
  return (
    <>
      { loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}

export default SearchResult
