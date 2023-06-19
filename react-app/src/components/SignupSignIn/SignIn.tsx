import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { auth, db } from "../../backend/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../App";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { BorderAllRounded } from "@mui/icons-material";


export default function LogIn() {
  // set email and password for storing and updating value within this component 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const defaultTheme = createTheme();

  // extract the values of user and setUser from the context.
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Attempt to sign in with the provided email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user); //console.log the user object 
        setEmail(""); //clear the email
        setPassword(""); //clear the password
        console.log("User signed in successfully!");
        
        // set the things to be retrieved from Firesttone post collection
        getDocs(collection(db, "user", email, "post")).then((querySnapshot) => {
          querySnapshot.forEach((query) => console.log(query.data())); //log each post datat
        });

        setUser(email); // update the user value in the user context froom this form

        // Redirect to homepage
        navigate("/post");
      })
      .catch((error) => {
        alert(error); // display eror message if there is error
      });
  };


  return (
    <>
    
      <Container className="container"
      sx={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1684151941972-2d456c0e2b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    maxWidth:"xl",
    height: "100vh",
    width: '100vw',
    margin: 0,
    '@media (min-width: 1200px)': {
      maxWidth: '1800px'}
    
  }}>
      <Grid container  >
        <CssBaseline />
        <Grid
          item
          mt={10}
          xs={false}
          sm={4}
          md={7}
          sx={{
            borderRadius: 4,
            backgroundImage: "url(https://images.unsplash.com/photo-1684151941972-2d456c0e2b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }} />

        {/* Sign In Form */}
        <Grid
          item
          mt={10}
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{borderRadius:5}}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              
              Welcome to Inspire Crissy 2023
            </Typography>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Updates the email state variable
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Updates the email state variable
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me" />
              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "linear-gradient(45deg, #060D2C 30%, #4A5384 90%)",
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
      Forgot password?
    </Link> */}
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
