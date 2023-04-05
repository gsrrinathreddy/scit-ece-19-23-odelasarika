import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
 
import axios from 'axios';

    
    
 
     
 
    



export default function Contactme(){
const [loader,setLoader] = useState(true);
    const [contactme,setContactme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Contactme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setContactme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

   return(
        <>
<Typography>Name: SARIKA</Typography>
<Typography>Address:3-66 Rangapeta</Typography>
<Typography>Phone No.: 9390297324</Typography>
        </>
        
    )
}