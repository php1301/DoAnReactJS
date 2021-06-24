/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {toast} from 'react-toastify'
import cookie from 'js-cookie'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Toast } from 'bootstrap';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({setChangeForm}) {
  const api = cookie.get('api');  let history = useHistory();
  let location = useLocation();
  const redirect = location && location.search ? location.search.slice(10) : null
  const classes = useStyles();
  const initialState = {
    error: null,
    person: {
        email:"",
        password:"",
    }
};
  const [input, setInput] = useState(initialState)
const handleClick = async () =>{
  const request = {
    email: input.person.email,
    password: input.person.password,
  }
  try{
    const data = await fetch(`${api || 'http://localhost:3001'}/login`,{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    if(data.status===200){
    const user = await data.json();
    cookie.set('username', user.username)
      cookie.set('avatar', user.avatar)
      cookie.set('id', user.id)
      cookie.set('token',  user.token)
      cookie.set('email', user.email)
    toast.success("Đăng nhập thành công bạn sẽ được chuyển hướng",{
      position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
    })
    setTimeout(() => {
      if(redirect)
      history.push({ pathname: redirect})
      else{
        history.push('/')
      }
    }, 4000);
  }
  else{
    throw Error
  }
}
  catch(e){
    toast.error("Có lỗi đăng nhập",{
      position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
    })
  }
}
const handleChange = (event)=> {
  const { name, value } = event.target;
      // setInput((state) => state.person[event.target.name] = event.target.value);
      setInput((prev)=>({ ...prev, person:{
              ...prev.person,
              [name]: value
      }}));

}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormControl className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={input.person.email}
            onChange={(e)=>{handleChange(e)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={input.person.password}
            onChange={(e)=>{handleChange(e)}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            onChange={(e)=>{handleChange(e)}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={()=>{setChangeForm(false)}} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </Container>
  );
}