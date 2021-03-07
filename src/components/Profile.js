import userEvent from '@testing-library/user-event';
import React from 'react';
import "../css/Profile.css";
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from './Nav';
import {useSelector} from "react-redux";

function Profile() {
    const user = useSelector(selectUser);//for fetching email

    return (
        <div className="profileScreen">
            <Nav/>
            
        <div className="profileScreen_body">
           <h1>Edit Profile</h1>

        <div className="profileScreen_info">
        <img         
         className="avatar"
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
         alt=""
         />
        
        <div className="profile_details">
            <h2>{user.email}</h2>
            
        <div className="profile_plans">
            <h3>Plans</h3>
            <p>Renewal Date</p>

        <div className="plan_details">
        <p>Netflix Standard</p>
        <button className="subscribe_button">Subscribe</button>
        
        </div>
            
            <button
             onClick ={() => auth.signOut()}//auth coming from auth>firbase > imported above
             className="profile_signout">
                Sign Out
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
    
    )
}

export default Profile;
