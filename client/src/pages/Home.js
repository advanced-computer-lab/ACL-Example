import {useState,useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import Grid from '@mui/material/Grid';

const {route,port} = require('../Environment')



function Home() {
  const [list,setList] = useState([]);
  //useEffect(()=>{},[]);
  useEffect(()=>{
    axios.get(`${route}:${port}/user/get-all-users`)
      .then(res => {
        setList(res.data);
      })


  },[]);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {list.map(u =>{return  <Grid item xs={2}><UserCard key={u._id} user={u}/></Grid>})}
    </Grid>
  );
}

export default Home;
