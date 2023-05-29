import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import Comment from "./Comment" ;
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useParams } from "react-router-dom";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CommentSection />
    </QueryClientProvider>
  )
}

function CommentSection(){
    const { postId } = useParams();
    // const { id } = useParams();


    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://647087103de51400f7247096.mockapi.io/api/inspire2023/post/${postId}/comment`).then(res => res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

return(

<>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

    <Comment postId = {data.postId} id={data.id} username={data.username} comment={data.comment} />
              
</List>

</>

)

}



