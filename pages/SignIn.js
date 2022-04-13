import { Box, Paper, TextField, Button, Typography, Avatar} from '@mui/material'
import {useRouter} from "next/router";
import LockIcon from '@mui/icons-material/Lock';


const style ={linkStyle: {cursor: "pointer", color: "#119aaa"},};
const avatarstyle={backgroundColor: "#79c0e9", alignItems: "center"}
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
    <Paper elevation={3} sx={{padding: "24px", display: "flex",flexDirection: "column", marginTop: "12px",alignItems: "center"}}>
    
      <Avatar style={avatarstyle}><LockIcon/></Avatar>
      <Typography sx={{fontSize: "30px", marginBottom: "25px"}} >Sign In</Typography>
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
    </Paper>
    </Box>
  );
}
