import { Box, Paper, TextField, Button, Typography} from '@mui/material'
import {useRouter} from "next/router";

const style ={linkStyle: {cursor: "pointer", color: "blue"},};

export default function SignIn() {
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
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      
      }}>
    <Box>
        <Typography variant="h5" sx={{fontSize: "25px"}} >Please Sign In</Typography>

    </Box>
    <Paper elevation={3} sx={{padding: "24px", display: "flex",flexDirection: "column", marginTop: "12px"}}>
      <TextField label="Email Address" name="email" type="email"/>
      <TextField 
      label="Password" 
      name="password"
      type="password" 
      sx={{marginTop: "12px"}}
      />
      <Button variant= "outlined" sx={{marginTop: "12px"}} >Sign In</Button>
  
      <Box sx={{display: "flex", justifyContent: "right", marginTop: "12px"}}>
          <Typography
          fontSize= "13px"
          fontWeight= 'bold'
          onClick={gotoRegister} 
          sx={style.linkStyle}
          >Create new account</Typography>
          
     </Box>

      <Box></Box>
    </Paper>
    </Box>
  );
}
