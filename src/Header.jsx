import React, { useEffect, useState } from 'react'
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

import './Style.css'
 const MovieFetchdata = () => {

  const [video, setVideo] = useState('inception');
  const [Videourl, setVideoUrl] = useState("https://youtu.be/sa9l-dTv9Gk");

  function handleSearch(){
    movieTrailer(video).then((response)=>{
      setVideoUrl(response)
      console.log(response)
    })
  }

  useEffect(()=>{
    handleSearch()
    },[video])

  useEffect(()=>{
    setVideoUrl("https://youtu.be/sa9l-dTv9Gk")
    setVideo("inception")
    },[])
  
  return(

    <div className="container">
    <header>
      <h1>Movie Trailer Search App</h1>
      <div className="input-field">
        <input type="text" placeholder="Search Any Movie Tralier's And Shows" onChange={(e)=>setVideo(e.target.value)}></input>
        <button onClick={handleSearch}className='Search-button'>Search</button>
      </div>
    </header>
     <ReactPlayer url={Videourl} controls={true}/>
    </div>
  )
}
export default MovieFetchdata