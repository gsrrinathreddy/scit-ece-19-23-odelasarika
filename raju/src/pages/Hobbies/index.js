import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
import axios from 'axios';

import {useState,useEffect} from 'react';
import { Typography } from '@mui/material';
export default function Hobbies(){

    const [loader,setLoader] = useState(true);
    const [hobbies,setHobbies] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Hobbies')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setHobbies(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))                                          
                                            
         useEffect(()=>{ 
   connectToServer();
},[])

  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://webstockreview.net/images/clipart-dance-dance-team-4.jpg',
    title: 'Dance',
    
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.Ap_TlcMrga4YRyhwRI8xtQHaGn&pid=Api&P=0',
    title: 'Listening music',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://wallpapercave.com/wp/wp8513148.jpg',
    title: 'Cricket',
    
  },
  {
    img: 'https://images.hdqwalls.com/wallpapers/bon-voyage-trip-4k-2d.jpg',
    title: 'Travelling',
    
  
  
  
  },
  {
  
  
  
  
    img: 'https://tse1.mm.bing.net/th?id=OIP.gRTOJKIfBK0P0oF6C0bnWAHaEJ&pid=Api&rs=1&c=1&qlt=95&w=203&h=113',
    title: 'learning',
    
  },
];