import React from 'react'
import AdminLayout from '../components/AdminLayout'
import { Avatar,Box,Paper,List,ListItem,ListItemAvatar,ListItemText,CssBaseline,BottomNavigation,BottomNavigationAction, Typography} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';



function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  
    return Array.from(new Array(5)).map(
      () => messageExamples[getRandomInt(messageExamples.length)],
    );
  }

export default function messages() {

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);


  return (
      <Box >
          <Paper elevation={5} align="center">
          <Typography variant= "h5" align="center">Messages</Typography>
          
          
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>

    </Paper>

      </Box>
  )
}

const messageExamples = [
    {
    
      primary: 'Mario Manuel',
      secondary: "I'll be available in July.",
      person: '/assets/image/dpicture.png',
    },
    {
      primary: 'Stormi Lour',
      secondary: `Do you have a suggestion for a good places?`,
      person: '/assets/image/dpicture.png',
    },
    {
      primary: 'Juan Dela Cruz',
      secondary: ' I think this might be amazing',
      person: '/assets/image/dpicture.png',
    },
    {
      primary: 'Gulf Delfin',
      secondary: 'I have the tickets now.',
      person: '/assets/image/dpicture.png',
    },
    {
      primary: "Kylie Fuz",
      secondary: 'My appointment was rescheduled for next Saturday.',
      person: '/assets/image/dpicture.png',
    },
    {
      primary: 'Ali Sy',
      secondary: 'Okay! I will pack my bags now.',
      person: '/assets/image/dpicture.png',
    },
    {
      primary: 'Sam Sammer',
      secondary: 'I was browsing your travel website and I was quite impressed by your services that your company provides.',
      person: '/assets/image/dpicture.png',
    },
  ];
  

messages.getLayout = function getLayout(page) {

    return <AdminLayout>{page}</AdminLayout>
}