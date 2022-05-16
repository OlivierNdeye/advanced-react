import React, { memo, useState } from 'react'
import Button from '../Button'

function PhotoGallery(props) {

  const { photos } = props

  const [gallery, setGallery] = useState(photos)
  
  const handleRemove = (key) => {
    const newGallery = gallery.filter((img, index) => index !== key)
    setGallery(newGallery)
  }

  const renderPhotos = (img, key) => {
    return(
    <div>
       <img src={img} />
          <Button onClick={() => handleRemove(key)}>
            Remover imagem { key }
          </Button>
        </div>
    )
  }
  return (

      <div>
        {gallery.map(renderPhotos)}      
      </div>
  )
} 

export default memo(PhotoGallery)