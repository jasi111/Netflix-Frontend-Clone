import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import "../css/Nav.css";

function Nav() {

    
    const [show, handleShow] = useState(false);
    const history = useHistory();//for history of routes to go back
    
    //function
    const transitionNavBar =() => {
        if (window.scrollY > 100) {//if the window scroll more than 100 show the navbar

            handleShow(true);
        }
        else
        {
            handleShow(false)
        }

        }
    

    //runs when the component mounts
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);//as we scroll its gonna trigger the transition navbar
        return() => window.removeEventListener("scroll", transitionNavBar)//clean up 

    }, []);


    return (
        <div className={`nav ${show && 'nav_black'}`}> 
                {/* //means only render nav_black css class if the show varible is true */}
         
         <div className="nav_contents">
         <img 
         onClick = { () => history.push("/")}
         className="nav_logo"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
         alt=""
         />

         <img
         onClick = { () => history.push("/profile")}//onclick for user avatar
         className="nav_avatar"
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
         alt=""
         />
         </div>
        </div>
    )
}

export default Nav
