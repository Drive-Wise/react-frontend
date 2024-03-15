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
            <Box sx={{ flexGrow: 1, display: { md: 'flex' },}}>
              
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
              <Tooltip title="Open settings">
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

                <MenuItem key={settings[0]} onClick={handleCloseUserMenu} component="a" href={'/SignUp'}>
                  <Typography textAlign="center">{settings[0]}</Typography>
                </MenuItem>
                <MenuItem key={settings[1]} onClick={handleCloseUserMenu} component="a" href={'/EventDashboard'}>
                  <Typography textAlign="center">{settings[1]}</Typography>
                </MenuItem>
                <MenuItem key={settings[2]} onClick={handleCloseUserMenu} component="a" href={'/Logout'}>
                  <Typography textAlign="center">{settings[2]}</Typography>
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
