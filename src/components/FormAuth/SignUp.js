/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import {toast} from 'react-toastify'
import cookie from 'js-cookie'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({setChangeForm}) {
  const api = cookie.get('api');  let history = useHistory();
  let location = useLocation();
  const redirect = location && location.search ? location.search.slice(10) : null
    const initialState = {
      error: null,
      person: {
          firstName: "",
          lastName: "",
          email:"",
          password:"",
          soDT: "",
          username:"",
      }
  };
    const [input, setInput] = useState(initialState)
  const classes = useStyles();
const handleClick = async () =>{
  const request = {
    hoTen: input.person.firstName + " " + input.person.lastName,
    username: input.person.username,
    soDT: input.person.soDT,
    email: input.person.email,
    password: input.person.password,
  }
  try{
    const data = await fetch(`${api || 'http://localhost:3001'}/signup`,{
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
    toast.success("Đăng ký thành công bạn sẽ được chuyển hướng",{
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
    toast.error("Có lỗi đăng ký",{
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
        console.log(input)


}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormControl className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={input.person.firstName}
                onChange={(e)=>{handleChange(e)}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={input.person.lastName}
                onChange={(e)=>{handleChange(e)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={input.person.username}
                onChange={(e)=>{handleChange(e)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="soDT"
                label="Số điện thoại"
                name="soDT"
                value={input.person.soDT}
                onChange={(e)=>{handleChange(e)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={input.person.email}
                onChange={(e)=>{handleChange(e)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Agree With Our Terms And Conditions"
                onChange={(e)=>{handleChange(e)}}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            <Link onClick={()=>{setChangeForm(true)}} href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </Container>
  );
}