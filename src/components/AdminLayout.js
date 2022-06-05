import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, ListItem, List, ListItemIcon, ListItemText, Divider, Avatar, Tooltip } from '@mui/material';
import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from "next/router";

export default function AdminLayout({children}) {
  const router =useRouter();
  const [open,setOpen] = useState(false);
  const setDrawerOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  const drawerGotoPage = (url) => {setOpen(false); router.push(url);}
  
return (
    <Box>
        <Head>
          <title>Admin-Dashboard</title>
        </Head>

        <AppBar>
          <Toolbar>
              <IconButton onClick={setDrawerOpen}><Image src= "/assets/svg/home.svg" alt="home" width={30} height={30} /> </IconButton>
              <Typography variant="h4" sx={{marginLeft: "12px"}}>Arat Lakbay</Typography>
          </Toolbar>
        </AppBar>

    <Drawer anchor ="left" open={open} onClose={handleClose}>
        <Box sx= {{minWidth: "200px", height: "100vh", display: "flex", flexDirection: "column"}}>
        
        <Box sx={{padding: "12px", display: "flex"}}>
        <Avatar />
            <Box sx={{marginLeft: "8px"}}>
                <Tooltip title= "giocarloschamplon@gmail.com">
                    <Typography color= "primary" noWrap sx={{maxWidth: "150px"}}>
                    giocarloschamplon@gmail.com
                    </Typography>
                    </Tooltip>

                    <Typography color= "secondary">Admin</Typography>
        </Box>
        </Box>
        
        <List sx={{flexGrow: 1}}>
            <Divider/>
            <ListItem button onClick={()=>drawerGotoPage("/dashboard")}selected={router.pathname.includes("dashboard")}>
                <ListItemIcon> <Image src= "/assets/svg/dashboard.svg" alt="dashboard" width={25} height={25} /> </ListItemIcon>
                <ListItemText primary= "Dashboard" />
            </ListItem>

            <ListItem button onClick={()=>drawerGotoPage("/users")}selected={router.pathname.includes("users")}>
                <ListItemIcon> <Image src= "/assets/svg/users.svg" alt="users" width={25} height={25} /> </ListItemIcon>
                <ListItemText primary= "Users" />
            </ListItem>

            <ListItem button onClick={()=>drawerGotoPage("/tourpackages")}selected={router.pathname.includes("tourpackages")}>
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
            </List>

            <List>
                <Divider/>
            <ListItem button>
                <ListItemIcon> <Image src= "/assets/svg/settings.svg" alt="settings" width={25} height={25} /> </ListItemIcon>
                <ListItemText primary= "Settings" />
            </ListItem>
            </List>            
        </Box>
    </Drawer>

    <Box sx={{marginTop: "100px"}}>{children}</Box>

    </Box>
    )
}
