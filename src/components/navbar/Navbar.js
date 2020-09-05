import React from 'react';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
    
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClose = ()=>{
      setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={()=>setOpen(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
             Telegram
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      <div>
      
        
          <Drawer  
          
          variant="persistent"
            anchor="left"
            open={open}>
                        <div className={classes.drawerHeader}>
                                <IconButton onClick={()=>setOpen(false)}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                        </div>
         <img style={{marginBottom:'20px'}} src="data:image/jpeg;base64,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" alt=""/>
        <Divider/>
        <List >
          <Link to="/" onClick={handleClose} style={{textDecoration : 'none',fontFamily:'BYekan' , fontSize:'bold' , color:'black'}}>
              <ListItem button >
                    <ListItemIcon><MailIcon/></ListItemIcon>
                    <ListItemText primary="صفحه ی اصلی" />
              </ListItem>
          </Link>
          <Link to="/favimages" onClick={handleClose} style={{textDecoration : 'none',fontFamily:'BYekan' , fontSize:'bold' , color:'black'}}>
              <ListItem button >
                    <ListItemIcon><MailIcon/></ListItemIcon>
                    <ListItemText primary="برگزیده ها" />
              </ListItem>
          </Link>
          <Link to="/change" onClick={handleClose} style={{textDecoration : 'none',fontFamily:'BYekan' , fontSize:'bold' , color:'black'}}>
              <ListItem button >
                    <ListItemIcon><MailIcon/></ListItemIcon>
                    <ListItemText primary="تعداد نمایش عکس" />
              </ListItem>
          </Link>
          {/* <Link to="/about" onClick={handleClose} style={{textDecoration : 'none',fontFamily:'BYekan' , fontSize:'bold' , color:'black'}}>
              <ListItem button >
                    <ListItemIcon>{<HelpIcon/>}</ListItemIcon>
                    <ListItemText primary="درباره" />
              </ListItem>
          </Link> */}
        </List>
                
          </Drawer>
        
      
    </div>
      
    </div>
  );
}
