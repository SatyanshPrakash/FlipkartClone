import React, { useState } from 'react';
import { Dialog, DialogContent, Box, Typography, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import { signIn, signUp } from '../../actions/Auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const initialValue = {
    login : {
        heading: 'Login',
        subHeading: 'Get access to your orders, wishlist and Recommendations'
    },
    signup: {
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const initialFormData = { mobileNumber: '', password: '' };

const Login = ({ open, setOpen, user }) => {
    const [ isSignedUp, setIsSignedUp ] = useState(true);
    const [ passwordField, setPasswordField ] = useState(false);
    const [ formData, setFormData ] = useState(initialFormData)
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ error, setError ] = useState('');
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        setIsSignedUp(true);
        setError('');
    }

    const toggleLogin = () => {
        setIsSignedUp((prevSignedUp) => !prevSignedUp);
        setPasswordField(false);
        setError('');
    };

    const continueButton =() => {
        setPasswordField(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSignIn = () => {
        dispatch(signIn(formData, history));
        if(!user) setError('Incorrect Login Credential');
    }

    const handleSignUp = () => {
        if(formData.mobileNumber.length === 10){
            if(formData.password.length >= 8){
                dispatch(signUp(formData, history));
                if(!user) setError('User already exist');
            } else setError('minimum 8 characters for password');
        } else setError('Invalid mobile Number');
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
               <Box style={{display: 'flex'}}>
                   <Box className={classes.image}>
                       <Typography variant="h5" className={classes.typo}>{isSignedUp ? initialValue.login.heading : initialValue.signup.heading}</Typography>
                       <Typography style={{marginTop: 18, fontWeight:500}} className={classes.typo}>{isSignedUp ? initialValue.login.subHeading : initialValue.signup.subHeading}</Typography>
                   </Box>
                   {isSignedUp ? 
                   <Box className={classes.login}>
                       <TextField required onChange={handleChange} name='mobileNumber' label='Enter Email/Mobile number'></TextField>
                       <TextField required onChange={handleChange} type="password" name='password' label='Enter Password'></TextField>
                       <Typography className={classes.error}>{error}</Typography>
                       <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                       <Button onClick={handleSignIn} variant="contained" className={classes.loginButton}>Login</Button>
                       <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                       <Button variant='contained' className={classes.requestButton}>Request OTP</Button>
                       <Typography onClick={toggleLogin} className={classes.createAcc}>New to Flipkart? Create an account</Typography>
                   </Box> :
                   <Box className={classes.login}>
                       <TextField required onChange={handleChange} type="phone" name='mobileNumber' label='Enter Mobile number'></TextField>
                       {passwordField ? 
                            <TextField required onChange={handleChange} type="password" name='password' label='Set Password'></TextField>
                       : null }
                       <Typography className={classes.error}>{error}</Typography>
                       <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                       {!passwordField ?
                       <Button onClick={continueButton} variant="contained" className={classes.loginButton}>CONTINUE</Button> 
                       :
                       <Button onClick={handleSignUp} variant="contained" className={classes.loginButton}>Sign Up</Button>
                        }
                       <Button onClick={toggleLogin} variant='contained' className={classes.requestButton}>Existing User? Log in</Button>
                   </Box>
}
               </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;
