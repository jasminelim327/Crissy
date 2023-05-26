import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material"
import React from "react"
import LikeButton from "./LikeButton"

function Comment() {

    return(

      <>

        
         <ListItem alignItems="flex-start">

          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>


          <ListItemText
            primary="Ali Connors"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  
                </Typography>
                {"great!!! "}
                <br />
                <LikeButton />
              </>
            }
          />
        </ListItem>
        
        
        
        
      </>




    )
}

export default Comment