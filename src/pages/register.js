import { Box, Paper, TextField, Button, Typography, Avatar } from '@mui/material'
import {useRouter} from "next/router";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Head from "next/head";

const style ={linkStyle: {cursor: "pointer", color: "primary.main"},};
const avatarstyle={backgroundColor: "#79c0e9"}

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

    <Head><title>Register</title></Head>    

    <Box><Avatar style={avatarstyle}><AccountCircleIcon/></Avatar></Box>
    <Box> <Typography sx={{fontSize: "30px"}} >Sign Up</Typography> </Box>
    <Box> <Typography sx={{fontSize: "14px", marginTop: "12px"}} >Please fill this form to create new account!</Typography> </Box>

    <Paper elevation={3} sx={{padding: "24px", display: "flex",flexDirection: "column", marginTop: "12px"}}>

      <TextField label="Full Name" name="name" type="name" />
      <TextField label="Email Address" name="email" type="email" sx={{marginTop: "12px"}}/>

    <FormControl>
        <FormLabel id="gender" sx={{marginTop: "10px"}}>Gender</FormLabel>
        <RadioGroup aria-labelledby="gender" name="gender1" sx={{display: "initial"}}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
    </FormControl>

      <TextField label="Phone Number" name="phone number" type="phone number" sx={{marginTop: "12px"}}/>
      <TextField label="Password" name="password" type="password" sx={{marginTop: "12px"}}/>
      <TextField label="Confirm Password" name="Confirm Password" type="password" sx={{marginTop: "12px"}}/>

      <Button variant= "outlined" sx={{marginTop: "12px"}} >Sign Up</Button>
  
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
