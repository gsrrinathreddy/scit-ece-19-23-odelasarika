import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Aboutus(){
    const [loader,setLoader] = useState(true);
    const [aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
  useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Name: SARIKA</Typography>
<Typography>Father Name: SRINIVAS</Typography>
<Typography>Mother Name: SWAROOPA</Typography>
<Typography>Email: odelasarika@gmail.com</Typography>
<Typography>Phone No.: 9390297324</Typography>
        </>
        
    )
}