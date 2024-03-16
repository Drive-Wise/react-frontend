import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Home', 'About', 'Contact Us'];
const settings = ['Account', 'Event Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const [anchorElUser2, setAnchorElUser2] = React.useState(null);

  const handleOpenUserMenu2 = (event) => {
    setAnchorElUser2(event.currentTarget);
  };
  
  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };



  return (
    <>
      <AppBar position="fixed" style={{ background: '#291F1E' }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="text-2xl text-title font-bold">DriveWise</h1>
            </a>
          </div>
            
            {/* nav buttons*/}
            <Box sx={{ flexGrow: 1, display: {xs: 'none', sm: 'none',  md: 'flex' },}}>
              
                <Button key={pages[0]} sx={{ mr: 3, my: 2, color: '#ffffff', display: 'block', fontWeight: '550'}} component="a" href={'/' + pages[0]}>
                  {pages[0]}
                </Button>
                <Button key={pages[1]} sx={{ mr: 3, my: 2, color: '#ffffff', display: 'block', fontWeight: '550'}} component="a" href={'/' + pages[1]}>
                  {pages[1]}
                </Button>
                <Button key={pages[2]} sx={{ mr: 3, my: 2, color: '#ffffff', display: 'block', fontWeight: '550'}} component="a" href={'/' + 'ContactUs'}>
                  {pages[2]}
                </Button>
              
            </Box>


            

            {/*Icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit"/>
            </Box>

            {/*Setting Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip  title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Hayden Stimpson" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem  key={setting} onClick={handleCloseUserMenu} component="a" href={'/' + setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            {/*Dropdown button */}
            <Box sx={{ flexGrow: 0, display: {sm: 'justify-end', xs: 'flex', sm: 'flex', md: 'none' }}}>
            <Tooltip  title="Open pages">
                <IconButton onClick={handleOpenUserMenu2} sx={{ p: 0 }}>
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="25" width="60" height="10" fill="#EF5448"/>
                  <rect x="20" y="45" width="60" height="10" fill="#EF5448"/>
                  <rect x="20" y="65" width="60" height="10" fill="#EF5448"/>
                </svg>

                </IconButton>
              </Tooltip>
                <Menu sx={{ mt: '45px' }} id="pages-dropdown" anchorEl2={anchorElUser2}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser2)}
                  onClose={handleCloseUserMenu2}
                >
                  <MenuItem  key={pages[0]} onClick={handleCloseUserMenu2} sx={{backgroundColor: '#EF5448',color: '#F5FEF9'}} component="a" href={'/' + pages[0]}>
                    <Typography textAlign="center">{pages[0]}</Typography>
                  </MenuItem>
                  <MenuItem  key={pages[1]} onClick={handleCloseUserMenu2} component="a" href={'/' + pages[1]}>
                    <Typography textAlign="center">{pages[1]}</Typography>
                  </MenuItem>
                  <MenuItem  key={pages[2]} onClick={handleCloseUserMenu2 } component="a" href={'/ContactUs'}>
                    <Typography textAlign="center">{pages[2]}</Typography>
                  </MenuItem>
                  
                  
                </Menu>
            
              
            </Box>



          </Toolbar>
        </Container>
      </AppBar>
      {/* Use a Fragment to wrap the AppBar and the content div */}
    </>
  );
}

export default ResponsiveAppBar;
