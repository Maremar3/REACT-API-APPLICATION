import React, {useState,useEffect}from 'react'


// import {apikey}   from    '../apikey.jsx'
import {apikey} from   '../apikey.jsx'
export default function Gallery(){
    const [galleryResults,setGalleryResults] =useState([])
useEffect(async ()=>{
    const headers = {
       ' Authorization': apikey
        
      }
     const apiResponse = await  fetch('https://api.pexels.com/v1/search?query=people', { headers });
      console.log(apiResponse)

},[])
return
<>
<h1>Dallery </h1>
{


galleryResults.map(post => {

})
}

</>
}

