import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';


interface HeaderProps {
  // sections: ReadonlyArray<{
  //   title: string;
  //   url: string;
  // }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;
  const navigate = useNavigate();
  const handleSignupClick = () => {
    // Navigate to the "signup" page
    navigate('/signup');
  };
  const handleLoginlick = () => {
    // Navigate to the "signup" page
    navigate('/login');
  };

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small"></Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        <Button variant="outlined" size="small" onClick={handleSignupClick}>
          Sign up
        </Button>
        <Button  size="small" onClick={handleLoginlick}>
           Login
        </Button>
        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {/* {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link> */}
        {/* ))} */}
      </Toolbar>
    </>
  );
}
