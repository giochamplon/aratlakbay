import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, ListItem, List, ListItemIcon, ListItemButton, ListItemText, Divider } from '@mui/material';
import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function dashboard() {
  
    const [open,setOpen] = useState(false);

    const setDrawerOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
    <Box>
      <Head>
        <title>Admin-Dashboard</title>
      </Head>

      <AppBar>
          <Toolbar>
              <IconButton onClick={setDrawerOpen}> <Image src= "/assets/svg/home.svg" alt="home" width={30} height={30} /> </IconButton>
              <Typography variant="h4" sx={{marginLeft: "12px"}}>Arat Lakbay</Typography>
          </Toolbar>
      </AppBar>

      <Drawer anchor ="left" open={open} onClose={handleClose}>
        <Box sx= {{minWidth: "200px", display: "flex", flexDirection: "column"}}>



        <List sx={{marginTop: "55px"}}>
        <Divider/>    
            <ListItem button>
                <ListItemIcon> <Image src= "/assets/svg/profile.svg" alt="profile" width={25} height={25} /> </ListItemIcon>
                <ListItemText primary= "Profile" />
            </ListItem>

            <ListItem button>
                <ListItemIcon> <Image src= "/assets/svg/briefcase.svg" alt="briefcase" width={25} height={25} /> </ListItemIcon>
                <ListItemText primary= "Tour Packages" />
            </ListItem>

            <ListItem button>
                <ListItemIcon> <Image src= "/assets/svg/tour.svg" alt="tour" width={25} height={25} /> </ListItemIcon>
                <ListItemText primary= "Tour" />
            </ListItem>

            <ListItem button>
                <ListItemIcon> <Image src= "/assets/svg/messages.svg" alt="messages" width={25} height={25} /> </ListItemIcon>
                <ListItemText primary= "Messages" />
            </ListItem>

            <Divider sx={{marginTop: "440px"}} />
            <ListItem button>
                <ListItemIcon> <Image src= "/assets/svg/settings.svg" alt="settings" width={25} height={25} /> </ListItemIcon>
                <ListItemText primary= "Settings" />
            </ListItem>            
        </List>


    </Box>
    </Drawer>
    </Box>
  )
}
