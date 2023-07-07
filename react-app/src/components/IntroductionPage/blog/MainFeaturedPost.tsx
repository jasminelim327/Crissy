import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: '#80bfff',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius:25,     mb: 5

      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          borderRadius:25, 
          backgroundColor: 'rgba(0,0,0,.1)',
        }}
      />
      <Grid container>
        <Grid item lg={9}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
         

            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom fontWeight="bold">
            INTRODUCING CRISSY ⚡️
            <br />

            </Typography>
            <Typography variant="h5" color="inherit" paragraph>

            Crissy is an inclusive platform that addresses unconscious bias in the workplace. It fosters meaningful conversations, promotes understanding, and provides educational resources. By empowering individuals and organizations to recognize and overcome biases, Crissy strives for more inclusive and equitable workplaces.

            {/* Crissy is a dynamic and inclusive discussion platform designed to address and raise awareness about unconscious bias in the workplace.


            It provides a safe and supportive environment for individuals to engage in meaningful conversations, share personal experiences, and learn from one another.
             Crissy aims to foster a sense of belonging and promote understanding by encouraging open dialogues and sharing diverse perspectives. By providing educational resources and facilitating meaningful conversations, Crissy empowers individuals and organizations to recognize and overcome unconscious biases, leading to more inclusive and equitable workplaces. */}

            </Typography>
            <Link variant="subtitle1" href="#">
            </Link>
          </Box>
        </Grid>
      
      </Grid>
    </Paper>
  );
}
