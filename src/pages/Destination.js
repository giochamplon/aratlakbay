import { Box, ImageList, ImageListItem, Fab, ImageListItemBar, Typography, Backdrop, TextField, Button, CircularProgress, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import React from 'react'
import HomeLayout from '../components/HomeLayout';
import {useRouter} from "next/router";
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

export default function Destination() {
  const DrawerGotoPage = (url) => {setOpen(false); router.push(url);}
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const buttonSx = {...(success && {bgcolor: green[500],'&:hover': {bgcolor: green[700],},}),};
  React.useEffect(() => {return () => {clearTimeout(timer.current);};}, []);

  const handleButtonClick = () => {
        if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);}, 2000);}};

  const [destination, setDestination] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false);};
  const handleToggle = () => {setOpen(!open);};
  const handleChange = (event) => {setDestination(event.target.value);};


  return (

    <Box sx={{marginTop: "60px", display: "flex", justifyContent: "center" }}>
    <Typography variant="h4" sx={{marginTop: "20px"}}>Destinations</Typography>
      <ImageList sx={{marginTop:"70px"}} >
        {itemData.map((item)=> (
          <ImageListItem key={item.img} >
            <img src={`${item.img}?w=500&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />

          <ImageListItemBar
            title={item.title}
            position="below"
            />

      <Button onClick={handleToggle}>Travel Now</Button>
      <Backdrop sx={{ color: 'black', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}>
      
      <Box sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme=> theme.palette.form.s1, }}>

        <Box sx={{ minWidth: 209, backgroundColor: theme=> theme.palette.form.s1,}}>
        <FormControl fullWidth>
        <InputLabel id="destination">My Destination</InputLabel>
        <Select
          labelId="destination"
          id="destination"
          value={destination}
          label="Destination"
          onChange={handleChange}
        >
          <MenuItem value={10}>El Nido, Palawan</MenuItem>
          <MenuItem value={20}>Boracay</MenuItem>
          <MenuItem value={30}>Chocolate Hills, Buhol</MenuItem>
          <MenuItem value={30}>Siargao</MenuItem>
          <MenuItem value={30}>Vigan</MenuItem>
          <MenuItem value={30}>Mayon Volcano, Albay</MenuItem>
        </Select>
        </FormControl>
        </Box>

      <Typography sx={{marginTop: "30px"}}>Promo A: All in Package promo for as low as 5,000 per person (3D2N)</Typography>
      <Typography>Promo B: All in Package promo for as low as 6,500 per person (4D3N)</Typography>
      <Typography sx={{marginTop: "20px"}}>Inclusions:</Typography>
      <Typography>Roundtrip Airfare, Hotel Accomodation, Daily Breakfast,</Typography>
      <Typography>With Terminal and Environmental Fees, Requirement Assistance</Typography>
      <TextField label="What Type of Promo?" name="promo" type="promo" sx={{marginTop: "5px"}}/>
      <TextField label="How many Passenger?" name="passenger" type="passenger" sx={{marginTop: "20px"}}/>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Book Now!
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>

    <Button variant= "contained" sx={{marginTop: "12px"}} onClick={()=>DrawerGotoPage("/Home")}selected={router.pathname.includes("Home")} >Go to Home</Button>

        </Box>
      </Backdrop>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )}

const itemData = [
  {
    img: 'assets/image/elnido.png',
    title: 'El Nido, Palawan',
  },
  {
    img: 'assets/image/boracay.png',
    title: 'Boracay',
  },
  {
    img: 'assets/image/hills.png',
    title: 'Chocolate Hills, Buhol',
  },
  {
    img: 'assets/image/siargao.png',
    title: 'Siargao',
  },
  {
    img: 'assets/image/vigan.png',
    title: 'Vigan',
  },
  {
    img: 'assets/image/mayon.png',
    title: 'Mayon Volcano, Albay',
  },
];



Destination.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}