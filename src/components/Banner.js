import React, { useState, useEffect } from 'react';
import "../css/Banner.css";
import axios from "../axios";//axios.js
import requests from  "../Requests.js";


function Banner() {
 
    // state to fetch data
    //inititialising the value to an empty array
    const [movie, setMovie] = useState([]);

    //useefeect to fetch movie info
    //fires this only when the banner component mounts
    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    //to pick a random number
                    // basically generate a random a random number from zero to the length of the result it come back 
                    //for example if there are 100 videos a number between 0 - 100 we be get and droped
                    //and request.data.result set the movie to that fetched movie
                ]
            );

            return request;//its a good practice to right reqturrn request for the request made
       
        }

        fetchData();//internalfunction
    }, []);

    // console.log(movie);

    
    function truncate(string, n) {

        return string?.length > n ? string.substr(0, n-1)+ '...' : string;
      

    }
    
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundPosition: "center center", 
            // backgroundColor: "black"
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
       }}>

           
            {/* included inline css style */}
            <div className="banner_contents">
              
               <h1 className="banner_title">
                   {movie?.title || movie?.name || movie?.orginal_name}
                   {/* //use title  or name or orginal name */}
               </h1>
            
             <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
             </div>

             {/* <h1 className="banner_description">{truncate(`This is a test banner_description This is a test banner_description
             This is a test banner_description
             This is a test banner_description
             This is a test banner_description`,150)}</h1> */}

                   <h1 className="banner_description">{
                   truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner-fadeBottom"/>
            {/* for the fade style at the banner bottom */}


        </header>
    )
}

export default Banner;
