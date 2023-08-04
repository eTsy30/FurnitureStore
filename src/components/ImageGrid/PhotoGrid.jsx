import React from 'react'
import PhotoItem from './PhotoItem'
import './style.scss'
const PhotoGrid = ({ photosData }) => {
  return (
    <div className="photo-grid">
      {photosData.map((photo, index) => (
        <PhotoItem key={index} imageUrl={photo.imageUrl} />
      ))}
    </div>
  )
}

export default PhotoGrid
