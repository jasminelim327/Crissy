import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import "firebase/firestore";
import { auth, db } from "../../backend/firebase";
import { useNavigate } from "react-router-dom";
import { setDoc, doc} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from "@mui/material/Alert";

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const userId = uuidv4();
  const [openToast, setOpenToast] = React.useState(false);
const [toastMessage, setToastMessage] = React.useState('');
const [toastSeverity, setToastSeverity] = React.useState('success');

const handleToastClose = () => {
  setOpenToast(false);
};

  const signUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // alert("Successful Sign Up");
        setToastMessage('Successful Sign Up');
        setToastSeverity('success');
        setOpenToast(true);
        setTimeout(() => {
          navigate("../login");
        }, 2000);
  
        updateProfile(user, {
          displayName: firstName + " " + lastName ,
        })
        .then(() => {
          console.log("Profile updated successfully");

          // Step 3: Send email verification
          if (auth.currentUser) {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                
                console.log("Email verification sent");
              })
              .catch((error) => {
                
                console.log("Error sending email verification:", error);
              });
          }
        })
        .catch((error) => {
          setToastMessage('Error  updating profile: ' + error);
      setToastSeverity('error');
      setOpenToast(true);
        });
    })
    .catch((error) => {
      setToastMessage('Error  updating profile: ' + error);
      setToastSeverity('error');
      setOpenToast(true);
    });
};

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
          <Box
        sx={{
          // backgroundImage: `url(https://images.unsplash.com/photo-1684151941972-2d456c0e2b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,
          backgroundRepeat: "no-repeat",
          backgroundColor:'#99ceff',
          backgroundSize: "cover",
          minHeight: "100vh", // Set the minimum height to cover the entire viewport
          display: "flex",
          alignItems: "center",
        }}
        >
      <CssBaseline />
      <Container component="main" maxWidth="xs" sx ={{backgroundColor: '#FAF9F6', borderRadius: 10}} >

        <Box
          sx={{
            marginTop: 6,
            marginBottom: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#80c1ff"  }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={(e) => signUp(e)}
            sx={{ mt: 3 }}
          >

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
               
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,background: '#80c1ff ', borderRadius:6 }}
            >
              Sign Up Now
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Box>
    </ThemeProvider>

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

