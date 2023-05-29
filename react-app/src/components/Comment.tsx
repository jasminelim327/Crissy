import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material"
import React from "react"
import LikeButton from "./LikeButton"


export interface CommentProps{
    postId: string;
    id: string,
    username: string;
    comment: string

}

function Comment(props: CommentProps) {

    const id = props.id
    const username = props.username
    const comment = props.comment
    const postId = props.postId

    return(

      <>

        
         <ListItem alignItems="flex-start">

          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>


          <ListItemText
            primary= {username}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  
                </Typography>
                {comment}
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