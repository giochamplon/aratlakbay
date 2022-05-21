import {Grid,Box,Paper,Typography } from '@mui/material';
import React from 'react';
import AdminLayout from '../components/AdminLayout';
import Image from 'next/Image';

export default function Dashboard() {

    const style = {
        paper1: {padding: "24px", backgroundColor: theme=> theme.palette.dashboard.bg1,},
        paper2: {padding: "24px", backgroundColor: theme=> theme.palette.dashboard.bg2,},
        paper3: {padding: "24px", backgroundColor: theme=> theme.palette.dashboard.bg3,}, 
        text1:  {fontWeight: "700", color: theme => theme.palette.text.t1},
        text2:  {color: theme => theme.palette.text.t2},

                }
  return( <Box sx={{padding: "0 21px"}}>
      <Box sx={{display: "flex", alignItems: "center"}}>
      <Image src= "/assets/svg/dashboard.svg" alt="dashboard" width={25} height={25}/>
      <Typography variant="h4" sx={{marginLeft: "10px"}}>Dashboard</Typography>
      </Box>

      <Grid container spacing={2} sx={{marginTop: "12px"}}>
          <Grid item xs={12} sm>
          <Paper sx={style.paper1}>
          <Typography variant= "h5" sx={style.text2}>Users</Typography>
          <Typography variant= "h5" sx={style.text1}>100</Typography>
          </Paper>
          </Grid>
 
          <Grid item xs={12} sm>
          <Paper sx={style.paper2}>
          <Typography variant= "h5" sx={style.text2}>Messages</Typography>
          <Typography variant= "h5" sx={style.text1}>100</Typography>
          </Paper>
          </Grid>

          <Grid item xs={12} sm>
          <Paper sx={style.paper3}>
          <Typography variant= "h5" sx={style.text2}>Destination</Typography>
          <Typography variant= "h5" sx={style.text1}>90</Typography>
          </Paper>
          </Grid>
      </Grid>

  </Box>
  );
}
Dashboard.getLayout = function getLayout(page) {
return <AdminLayout>{page}</AdminLayout>
};