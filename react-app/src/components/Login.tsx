import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Fab, TextField } from '@mui/material';
import "../style/Login.css";

const divStyle = {padding: 15, align: 'center', textAlign: 'center'};

// var boxStyle = {padding: 15, align: 'center',  textAlign: 'center', backgroundColor: 'lightgray'};

function Login() {
   return <Box id='loginbox'>


    <div id ='login-field' style ={divStyle}>
    
    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Username"/>
    </div>
    <div id='password-field' style ={divStyle}>
    <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
    </div>

<div style={divStyle}>
    <Button href="#text-buttons">Login</Button>
</div>
</Box>

 
} 
export default Login
