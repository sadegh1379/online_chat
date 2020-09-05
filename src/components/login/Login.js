import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import TelegramIcon from '@material-ui/icons/Telegram';
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  paper1: {
    margin: theme.spacing(4, 4),
   
    height:'100%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    direction:'rtl'
    ,textAlign:'right'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select:{
      width: '100%',
      margin:'10px auto'
  },
  brand:{
    marginTop:'20px',
    marginBottom:'20px'
  },
  loading:{
    zIndex:'100'
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [name , setName] = React.useState('');
  const [gender , setGender] = React.useState('');
  const [err , setErr] = React.useState('')

  
  
  const submitForm = (e)=>{
    e.preventDefault();
    if(name === '' || gender === ''){
      setErr('لطفا فیلد ها را کامل کنید');
      setTimeout(()=>setErr(''),2000)
    }else{
      const user = {
        name ,
        gender
      }

      props.setLoading(true);
      setTimeout(()=>{
        
     
      props.history.push({
        pathname: '/chatroom',
        state: user
      });

        props.setLoading(false)
      } , 2000)
     

      
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
       <Backdrop className={classes.loading} open={props.loading}>
        <CircularProgress color="primary" />
      </Backdrop>
     
      <Grid item xs={12} sm={12} md={12} className={classes.paper1} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <TelegramIcon />
          </Avatar>
          <Typography className={classes.brand} component="h1" variant="h5">
              Telegram 
          </Typography>
          <form onSubmit={submitForm} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="نام کاربری"
              name="name"
              autoComplete="off"
              
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
           <TextField
                id="outlined-select-currency"
                select
                label="جنسیت"
               className={classes.select}
                variant="outlined"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
                >
               
                    <MenuItem value={1}>اقا</MenuItem>
                    <MenuItem  value={0}>خانم</MenuItem>
                
                </TextField>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="مرا به خاطر بسپار"
            /> */}
            {err && <Alert severity="error">{err}</Alert>}
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ورود
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}