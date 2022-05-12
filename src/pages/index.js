
import { Box, dividerClasses, Typography } from "@mui/material";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";

export default function Home() {


  const router = useRouter();
  const [isAuth, setAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)



useEffect(() => {
  if(isAuth){
    alert("Full access")
  } else{
    router.push("/SignIn");
  }
}, []);

if(isLoading || !isAuth){
  return (

    <Box>
<Typography> Authenticating ........</Typography>
    </Box>

  );
}else{
  return (
    <Box>
<Typography> Full Access</Typography>
    </Box>

  );
}
}
