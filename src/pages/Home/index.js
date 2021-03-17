import React from 'react'
import { useState } from 'react'
import { Heading, Input, Spinner } from "@chakra-ui/react"
import { useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()
  

  const handlerSubmit = e => {
    e.preventDefault()
    console.log(keyword)  
    pushLocation(`/search/${keyword}`)
  }
  
  const handlerInput = e => {
    setKeyword(e.target.value)
  }
  return (
    <div>
      <Heading>Home</Heading>
      <form onSubmit={handlerSubmit}>
        <Input onChange={handlerInput} placeholder="Keyword" type="text" value={keyword} />
      </form>
      { loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
      }
    </div>
  )
}

export default Home
