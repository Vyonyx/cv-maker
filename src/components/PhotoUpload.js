import React, { Component } from 'react'

import { StyledPhotoUpload } from './styles/PhotoUpload.styled'

// class PhotoUpload extends Component {
//     state = {
//       photo: ''
//     }

//     whenPhotoUploaded = (event) => {
//       this.setState(prevState => {
//         prevState.photo = URL.createObjectURL(event.target.files[0])
//       }, () => {this.props.setPhoto(this.state.photo)})
//     }

//     render() {
//       const { photo } = this.props
//       // const profilePhoto = new URL(photo)
//       return (
//         <StyledPhotoUpload>
//           <label>Profile Photo: </label>
//           <input id='photo' type='file' title=' ' onChange={this.whenPhotoUploaded}></input>
//           {photo != null && <div><img src={photo} alt=''></img></div>}
//         </StyledPhotoUpload>
//       )
//     }
//   }

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
