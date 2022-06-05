import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, ListItem, List, ListItemIcon, ListItemText, Divider, Avatar, Tooltip } from '@mui/material';
import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from "next/router";

const style ={linkStyle: {cursor: "pointer", color: "primary.main"},};

export default function HomeLayout({children}) {
  const router =useRouter();
  const [open,setOpen] = useState(false);
  const setDrawerOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  const DrawerGotoPage = (url) => {setOpen(false); router.push(url);}

  
return (
    <Box sx={{backgroundColor: theme=> theme.palette.form.s1,}}>
        <Head>
          <title>Arat Lakbay</title>
        </Head>

        <AppBar>
          <Toolbar>
              <IconButton><Image src= "/assets/image/icon.png" alt="home" width={40} height={40} /> </IconButton>
              <Typography variant="h4" sx={{marginLeft: "12px"}}>Arat Lakbay</Typography>



    <Box open={open} onClose={handleClose } sx={{display: "flex" , justifyContent: "space-between", marginLeft: "auto" }}>
        <Box>
        <List>
            <ListItem button onClick={()=>DrawerGotoPage("/Home")}selected={router.pathname.includes("Home")} >
                <ListItemText primary= "Home" />
            </ListItem>
            </List>            
        </Box>

        <Box>
        <List>
            <ListItem button onClick={()=>DrawerGotoPage("/Destination")}selected={router.pathname.includes("Destination")} >
                <ListItemText primary= "Destination" />
            </ListItem>
            </List>            
        </Box>

        <Box>
        <List>
            <ListItem button onClick={()=>DrawerGotoPage("/About")}selected={router.pathname.includes("About")} >
                <ListItemText primary= "About" />
            </ListItem>
            </List>            
        </Box>

        <Box>
        <List>
            <ListItem button onClick={()=>DrawerGotoPage("/SignIn")}selected={router.pathname.includes("SignIn")} >
                <ListItemText primary= "Sign In" />
            </ListItem>
            </List>            
        </Box>

        <Box>
        <List>
            <ListItem button onClick={()=>DrawerGotoPage("/register")}selected={router.pathname.includes("register")} >
                <ListItemText primary= "Sign Up" />
            </ListItem>
            </List>            
        </Box>
    </Box>

    </Toolbar>
        </AppBar>

    <Box sx={{marginTop: "10px"}}>{children}</Box>

    </Box>
    )
}
