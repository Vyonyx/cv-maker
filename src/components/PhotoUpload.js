import React from 'react'

import { StyledPhotoUpload } from './styles/PhotoUpload.styled'

function PhotoUpload({ photo, setPhoto }) {
  const handlePhotoUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    setPhoto(url)
  }

  return (
    <StyledPhotoUpload>
      <label>Profile Photo: </label>
      <input
        id="photo"
        type="file"
        title=" "
        onChange={handlePhotoUpload}
      ></input>
      {photo != null && (
        <div>
          <img src={photo} alt=""></img>
        </div>
      )}
    </StyledPhotoUpload>
  )
}

export default PhotoUpload
