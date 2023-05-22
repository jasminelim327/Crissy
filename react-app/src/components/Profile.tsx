import { Avatar, Divider, ListItem, ListItemButton, TextField } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

function Profile(){

    var name = "Jasmine"

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };
    
    return<>
<div>
    <h1>{name}'s Profile</h1>
    
    <div style={style}>
    <Avatar sx={{ bgcolor: deepOrange[500], margin:5}}>N</Avatar>
    <TextField
          id="outlined-read-only-input"
          label="Name"
          defaultValue="Jasmine Lim Jia Yi"
          InputProps={{
            readOnly: true,
          }}
        />

    <List sx={style} component="nav" aria-label="mailbox folders">
  <ListItem >
    <ListItemText primary="Inbox" />
  </ListItem>
  <Divider />
  <ListItem  divider>
    <ListItemText primary="Profile" />
  </ListItem>
  <ListItem >
    <ListItemText primary="Trash" />
  </ListItem>
  <Divider light />
  <ListItem >
    <ListItemText primary="Spam" />
  </ListItem>
</List>
    
</div>

</div>



    
    
    
    
    </>


}

export default Profile;