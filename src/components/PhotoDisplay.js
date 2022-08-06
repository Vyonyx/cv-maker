import { Component } from 'react'
import { StyledPhotoDisplay } from './styles/PhotoDisplay.styled'

class PhotoDisplay extends Component {
    render() {
        const {profilePhoto} = this.props
        return (
        <StyledPhotoDisplay className='photo'>
            <img src={profilePhoto} alt='Profile'></img>
        </StyledPhotoDisplay>
        )
    }
}

export default PhotoDisplay
  