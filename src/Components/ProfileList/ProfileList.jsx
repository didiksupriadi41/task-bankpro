import React from 'react';
import Loader from 'react-loader-spinner';
import './ProfileList.css';

const ProfileList = (props) => {
    return (
        <div className="profile-list">
            <span className="profile-category">{props.category}</span>
            {
                (props.isFetching &&
                    <div className="loader">
                        <Loader
                            type="ThreeDots"
                            color="#000"
                            height={30}
                            width={30}
                            />
                    </div>
                ) || 
                <span className="profile-data">{props.data}</span>
            }
            
        </div>
    )
}

export default ProfileList;