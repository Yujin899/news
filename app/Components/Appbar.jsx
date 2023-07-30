import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Container, IconButton } from '@mui/material';
import Drawer from './Drawer';

const Appbar = () => {


  const opening = false;
  


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }  };

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container  sx={{display: "flex" , height: "60px" , alignItems: "center" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Box sx={{display: {xs: "none" , sm: "block"}}}>
          <Link style={{color: "white" , textDecoration: "none" , marginRight: "15px"}} href="/">
            Home
          </Link>

          <Link style={{color: "white" , textDecoration: "none" , marginRight: "15px" , ":hover": {backgroundColor: "white"}}} href="/posts">
            Posts
          </Link>


          <Link style={{color: "white" , textDecoration: "none" , marginRight: "15px"}} href="/about">
            About
          </Link>
          </Box>
         
          <Drawer />
        </Container>
      </AppBar>
    </Box>
    </div>
  )
}

export default Appbar