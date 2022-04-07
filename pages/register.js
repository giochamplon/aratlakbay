import { Box, Paper, TextField, Button, Typography } from '@mui/material'
import {useRouter} from "next/router";

const style ={linkStyle: {cursor: "pointer", color: "blue"},};

export default function register() {
    const router = useRouter();

  return ( 
    <Box 
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      
      }}>
    <Box>
        <Typography variant="h5" sx={{fontSize: "25px"}} >Create new account</Typography>

    </Box>
    <Paper elevation={3} sx={{padding: "24px", display: "flex",flexDirection: "column", marginTop: "12px"}}>
      <TextField label="Email Address" name="email" type="email"/>
      
      <TextField 
      label="Password" 
      name="password"
      type="password" 
      sx={{marginTop: "12px"}}
      />
      <TextField 
      label="Confirm Password" 
      name="Confirm Password"
      type="password" 
      sx={{marginTop: "12px"}}
      />

      <Button variant= "outlined" sx={{marginTop: "12px"}} >Register</Button>
  
      <Box 
        sx={{display: "flex", justifyContent: "center", marginTop: "12px"}}>
          <Typography
          variant="subtitle2"
          onClick={()=> router.push("/SignIn")}
          sx={style.linkStyle}
          >
        Do you have an account? Please Sign In
        </Typography>
     </Box>
    </Paper>
    </Box>
  );
}
