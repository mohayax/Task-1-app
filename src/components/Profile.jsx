import React from 'react'
import mohayax from '../images/mohayax.jpg';

const Profile = () => {
    const person = {
        name: "@mohayax88",
        slack: '@Muhammad'
    }

    return (
        <div className="image-container">
            <img src={mohayax} alt="" id='profile_img' />
            <h2 id='twitter'>{person.name}</h2>
            <p id='slack'>{person.slack}</p>
        </div>
    )
}

export default Profile