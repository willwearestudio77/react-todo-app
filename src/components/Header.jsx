import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ToDos
      </Typography>
      <Divider />
      <List>
      <ListItem disablePadding>
            <ListItemButton component={NavLink} 
            to='/'
            sx={{ textAlign: 'center' }}
            >
              <ListItemText primary='List' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
            component={NavLink} 
            to='/add'
            sx={{ textAlign: 'center' }}>
              <ListItemText primary='Add' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            component={NavLink} 
            to='/update'
             sx={{ textAlign: 'center' }}>
              <ListItemText primary='Update' />
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Todos
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
              <Button  sx={{ color: '#fff' }}
              component={NavLink}
              to='/add'>
                Add
              </Button>
            
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
            ToDos
        </Typography>
      </Box>
    </Box>
  );
}


export default DrawerAppBar;
