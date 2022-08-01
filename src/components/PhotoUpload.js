import React, {Component} from 'react'

import {StyledPhotoUpload} from './styles/PhotoUpload.styled'

class PhotoUpload extends Component {
    state = {
      photo: ''
    }
  
    whenPhotoUploaded = (event) => {
      this.setState(prevState => {
        prevState.photo = URL.createObjectURL(event.target.files[0])
      }, () => {this.props.setPhoto(this.state.photo)})
    }
  
    render() {
      return (
        <StyledPhotoUpload>
          <label>Profile Photo: </label>
          <input type='file' onChange={this.whenPhotoUploaded}></input>
        </StyledPhotoUpload>
      )
    }
  }

  export default PhotoUpload