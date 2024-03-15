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

const pages = ['Home', 'About', 'Account'];
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
            <Box sx={{ flexGrow: 0.86, display: { xs: 'none', md: 'flex' },}}>
              {pages.map((page) => (
                <Button key={page} sx={{ mr: 3, my: 2, color: '#ffffff', display: 'block', fontWeight: '550'}} component="a" href={'/' + page}>
                  {page}
                </Button>
              ))}
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu} component="a" href={'/' + setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
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
