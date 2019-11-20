import React from 'react';
import './ProfileList.css';

const ProfileList = (props) => {
    return (
        <div className="profile-list">
            <span className="profile-category">{props.category}</span>
            <span className="profile-data">{props.data}</span>
        </div>
    )
}

export default ProfileList;