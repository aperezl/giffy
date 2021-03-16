import React from 'react'
import { useState } from 'react'
import { Heading, Input } from "@chakra-ui/react"
import { useLocation } from 'wouter'

const Home = () => {
  const [keyword, setKeyword] = useState('')

  const [path, pushLocation] = useLocation()
  console.log(path)

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
    </div>
  )
}

export default Home
