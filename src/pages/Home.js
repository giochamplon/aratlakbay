import {Grid,Box,Paper,Typography } from '@mui/material';
import React from 'react'
import HomeLayout from '../components/HomeLayout';

export default function Home() {
  return ( <Box sx={{padding: "21px"}}>

  <Grid container spacing={6} sx={{marginTop: "20px"}}>
      <Grid item xs={12} m  sx={{alignItems: "center"}}>
      <img
            src="assets/image/FrontImage.png"
            width= "1625"
            height="550"
            alt="image"
            />
          <Typography variant= "h3" align="center" sx={{fontFamily: "sans-serif"}} >TIME TO EXPLORE THE PHILIPPINES</Typography>
      </Grid>

      <Grid item xs={12} sm>

      <Typography variant= "h5" sx={{ marginTop: "200px"}} >One of Southeast Asia's most fascinating countries is the Philippines. On Earth, it's like heaven. Some of the sceneries and photographs in this post appear to be unreal! Where in the Philippines are the most beautiful spots?</Typography>
      </Grid>

      <Grid item xs={12} sm>
      <img
            src="assets/image/FrontImage2.png"
            width= "900"
            height="500"
            alt="image"
            />
      </Grid>

      <Grid item xs={12} m>
      <Typography variant= "h4" align="center" sx={{fontFamily: "cursive", marginTop: "200px"}} >Tour Packages</Typography>
      </Grid>
      
          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/elnido.png"
            width= "290"
            height="350"
            alt="image"/>  
          <Typography variant= "h5" align="center">El Nido, Palawan</Typography>
          </Grid>

          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/boracay.png"
            width= "290"
            height="350"
            alt="image"
            /> 
          <Typography variant= "h5" align="center" >Boracay</Typography>
          </Grid>

          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/hills.png"
            width= "290"
            height="350"
            alt="image"
            /> 
          <Typography variant= "h5" align="center">Chocolate Hills, Buhol</Typography>
          </Grid>

          <Grid item xs={12} m>
      <Typography variant= "h4" align="center" sx={{fontFamily: "cursive", marginTop: "10px"}} ></Typography>
      </Grid>

          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/siargao.png"
            width= "290"
            height="350"
            alt="image"
            /> 
          <Typography variant= "h5" align="center" >Siargao</Typography>
          </Grid>

          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/vigan.png"
            width= "290"
            height="350"
            alt="image"
            /> 
          <Typography variant= "h5" align="center">Vigan</Typography>
          </Grid>

          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/mayon.png"
            width= "290"
            height="350"
            alt="image"
            /> 
          <Typography variant= "h5" align="center">Mayon Volcano, Albay</Typography>
          </Grid>

          <Grid item xs={12} m>
          <Typography variant= "h4" align="center" sx={{fontFamily: "cursive" ,marginTop: "200px"}} >Our Services</Typography>
          </Grid>

          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/ticket.png"
            width= "290"
            height="350"
            alt="image"
            /> 
          <Typography variant= "h5" align="center" sx={{marginTop: "10px"}}>Air Ticketing</Typography>
          <Typography variant= "h6" align="center" >Flying for business work or for a vacation? Our team of experts will surely suggest and book the right flight.</Typography>
          </Grid>

          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/hotel.png"
            width= "290"
            height="350"
            alt="image"
            /> 
          <Typography variant= "h5" align="center" sx={{marginTop: "10px"}}>Hotel Reservation</Typography>
          <Typography variant= "h6" align="center" >We are engaged in providing excellent hotel reservation facilities for a wide range of hotels so you can enjoy the stay.</Typography>
          </Grid>

          <Grid item xs={12} sm align="center">
          <img
            src="assets/image/money.png"
            width= "290"
            height="350"
            alt="image"
            /> 
          <Typography variant= "h5" align="center" sx={{marginTop: "10px"}} >Foreign Exchange</Typography>
          <Typography variant= "h6" align="center">Stuck somewhere with different country currency. No need to worry we are one stop shop for all your forex needs.</Typography>
          </Grid>


  </Grid>
</Box>
  )
}
Home.getLayout = function getLayout(page) {
    return <HomeLayout>{page}</HomeLayout>
}