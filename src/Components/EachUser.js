import React from 'react';
import './EachUser.css'
import PropTypes from "prop-types"

const EachUser = (data) =>{
//
    const [isPhotoOpen, setIsPhotoOpen] = React.useState(false)

const openFhotoitemFull = () => {
       return setIsPhotoOpen(!isPhotoOpen)
}
    return(
        <ul>
                <li key={data.id}>
                <h2>{data.data.user.name}</h2>
                    <img onClick={openFhotoitemFull} className={isPhotoOpen ? 'userImg' :'img'} src={isPhotoOpen ? data.data.user.profile_image.large  :data.data.user.profile_image.small}/>
                    <p>{data.data.user.username}</p>
                </li>
        </ul>
    )
}


EachUser.propTypes = {
        data:PropTypes.object.isRequired,
}
export default React.memo(EachUser)