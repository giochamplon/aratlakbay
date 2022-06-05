import { Box, Paper, TextField, Button, Typography, Avatar} from '@mui/material'
import {useRouter} from "next/router";
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Head from "next/head";

const style ={linkStyle: {cursor: "pointer", color: "primary.main"},};
const avatarstyle={backgroundColor: "#79c0e9", alignItems: "center"}
export default function SignIn() {

  const [open,setOpen] = useState(false);
  const DrawerGotoPage = (url) => {setOpen(false); router.push(url);}
  const router = useRouter();
  const gotoRegister = ()=> {
        router.push("/register")
    }

  return ( 

    <Box 
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: theme => theme.palette.form.s1,
      }}>

         <img
            src="https://wallpapercave.com/wp/wp1995989.jpg"
            style={{width: "60%", height: "100%"}}
            alt="brand"
            />

      <Head><title>Sign In</title></Head> 
      <Paper elevation={3} sx={{padding: "24px", display: "flex",flexDirection: "column", marginTop: "200px", marginLeft: "195px",alignItems: "center", }}>
    
      <Avatar style={avatarstyle}><LockIcon/></Avatar>
      <Typography sx={{fontSize: "30px", marginBottom: "25px"}} >Sign In</Typography>
      <TextField label="Email Address" name="email" type="email"/>
      
      <TextField 
      label="Password" 
      name="password"
      type="password" 
      sx={{marginTop: "12px"}}
      />
      <Button variant= "contained" sx={{marginTop: "12px"}} onClick={()=>DrawerGotoPage("/Home")}selected={router.pathname.includes("Home")} >Sign In</Button>
  
      <Box sx={{display: "flex", justifyContent: "right", marginTop: "12px"}}>
          <Typography
          fontSize= "13px"
          fontWeight= 'bold'
          onClick={gotoRegister} 
          sx={style.linkStyle}
          >Create new account</Typography>    
     </Box>
    </Paper>
    </Box>
  );
}
