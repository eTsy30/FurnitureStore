import React from 'react'
import './style.scss'
const PhotoItem = ({ imageUrl }) => {
  return (
    <div className="photo-item">
      <img src={imageUrl} alt="Photo" />
    </div>
  )
}

export default PhotoItem
