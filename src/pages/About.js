import {Grid,Box,Paper,Typography, Rating } from '@mui/material';
import React from 'react'
import HomeLayout from '../components/HomeLayout';

export default function About() {

  const [value, setValue] = React.useState(2);


  return ( <Box sx={{padding: "21px" ,display: "flex"}}>

  <Grid container spacing={2} sx={{marginTop: "30px"}}>
      <Grid item xs={12} sm>

      <Typography variant= "h3" align="center" sx={{fontFamily: "sans-serif", marginBottom: "50px"}} >ABOUT US</Typography>
      <Typography variant= "h5" align="center" sx={{marginBottom: "50px"}}>We, the Arat Lakbay Travel Agency in the Philippines, are a one-stop shop for all your travel needs, from domestic tours for tourists. We recognize how important your vacation is to you, therefore we make every effort to make your experience unforgettable. From the moment you make your initial inquiry until you return home after your tour, we believe your vacation should be absolutely remarkable.</Typography>
      <img
            src="assets/image/travelling.png"
            width= "1650"
            height="660"
            alt="image"
            />
      </Grid>

      
      <Grid item xs={12} m align="center" marginTop="20px">
          <img 
            src="assets/image/phone.png"
            width={30} height={30}
            alt="image"
            /> 
          <Typography variant= "h5">Travel Now</Typography>
          <Typography variant= "h6">09123456789</Typography>
          <Typography marginTop= "15px" component="legend">Can You Rate Me?</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
          </Grid>
  </Grid>

</Box>
  )
}
About.getLayout = function getLayout(page) {
    return <HomeLayout>{page}</HomeLayout>
}