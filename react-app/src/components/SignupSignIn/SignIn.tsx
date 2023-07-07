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
import { User, UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../App";
import { BorderAllRounded } from "@mui/icons-material";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from "@mui/material/Alert";

export default function LogIn() {
  // set email and password for storing and updating value within this component 
  const [username, setUsermame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const defaultTheme = createTheme();
  const [openToast, setOpenToast] = useState(false);
const [toastMessage, setToastMessage] = useState('');
const [toastSeverity, setToastSeverity] = useState('success');
  
const handleToastClose = () => {
  setOpenToast(false);
};
  // extract the values of user and setUser from the context.
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Attempt to sign in with the provided email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log("User:", user);


        setEmail(""); //clear the email
        setPassword(""); //clear the password
        setToastMessage('User Signed in successfully');
        setToastSeverity('success');
        setOpenToast(true);

        setUser(user);

        setTimeout(() => {
          navigate("../post");
        }, 1500);
      })
        
      .catch((error) => {
        // Error occurred during sign-in
        setToastMessage("Error signing in: " + error.message);
        setToastSeverity("error");
        setOpenToast(true);
      });
  };
        // // Retrieve the posts from the Firestore post collection
        // const postQuery = query(collection(db, "post"));
        // getDocs(postQuery).then((postSnapshot) => {
        //   postSnapshot.forEach((postDoc) => {
        //     console.log("Post data:", postDoc.data());
        //   });
        // });

        // const setUser: React.Dispatch<React.SetStateAction<User | null>> = useContext(UserContext);

        // Redirect to homepage
        
  return (
    <>
      <Box
        sx={{
          // backgroundImage: `url(https://images.unsplash.com/photo-1684151941972-2d456c0e2b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,
          backgroundRepeat: "no-repeat",
          backgroundColor:'#cce6ff',
          backgroundSize: "cover",
          minHeight: "100vh", // Set the minimum height to cover the entire viewport
          display: "flex",
          alignItems: "center",
          borderRadius:"0",
            justifyContent:"center"
        }}
        >
        {/* Sign In Form */}
        <Grid
          item
          mt={0}
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          square
          elevation={3}
          sx={{borderRadius:25}}
          
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Typography component="h1" variant="h5" fontWeight={'bold'} color={"#66b5ff"}>
              
              Welcome to Crissy
            </Typography>

            <Typography component="h2" variant="h5" fontWeight={'bold'} color={"#99ceff"}>
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
                  background: "#80c1ff",
                  borderRadius:4
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
    </Box>

    <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={handleToastClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleToastClose}
          severity={toastSeverity}
        >
          {toastMessage}
        </Alert>
      </Snackbar>

  
    </>
  );
}
