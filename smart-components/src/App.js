import React , { useState } from 'react'
import Button from './Components/Button'
import Calc from './Components/Calc'
import PhotoGallery from './Components/PhotosGallery'

function App() {

  const photos = [
    'https://placeimg.com/340/160/people',
    'https://placeimg.com/340/160/cats',
    'https://placeimg.com/340/160/dogs',
    'https://placeimg.com/340/160/tech',
    'https://placeimg.com/340/160/nature',
  ]

  return(
    <>
     <h1> Galeria de fotos </h1>
      <PhotoGallery 
        photos={photos}
      />
    </>
  )
}
export default App