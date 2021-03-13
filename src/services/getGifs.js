const apiKey = 'e2NeHBXUerfCf10JczCZRyK2zC59ndnN'


export default async function getGifs({keyword = 'unicorn'} = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  const res = await fetch(apiUrl)
  const { data } = await res.json()
  return data.map(image => {
    const { url } = image.images.fixed_width_downsampled
    const { title, id } = image
    return { title, id, url}
  })
}