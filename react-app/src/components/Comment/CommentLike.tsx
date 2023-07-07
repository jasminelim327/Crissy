import { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../../backend/firebase";
import { Button, Avatar, ListItemAvatar } from "@mui/material";
import { useParams } from "react-router-dom";
import { ThumbUpAlt } from "@mui/icons-material";

function CommentLikeButton(props: { likes: number, commentid: string }) {
    const { id } = useParams();
    const { commentid, likes } = props;
    const [numberOfLikes, setNumberOfLikes] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
    useEffect(() => {
      console.log(id);
      console.log('commentid', commentid)
      const storedLikeStatus = localStorage.getItem(commentid);
      if (storedLikeStatus === "true") {
        setIsLiked(true);
      }
    }, [commentid]);
  
    const handleLikeClick = async () => {
        try {
            if (!isButtonDisabled) {
              setIsButtonDisabled(true);
        
              const postDocRef = doc(db, 'post', id);
              const postDocSnapshot = await getDoc(postDocRef);
        
              if (postDocSnapshot.exists()) {
                const postDocData = postDocSnapshot.data();
        
                const commentsCollectionRef = collection(postDocRef, 'comment');
                const commentsQuerySnapshot = await getDocs(commentsCollectionRef);
    
                commentsQuerySnapshot.forEach(async (commentDoc) => {
                  const commentData = commentDoc.data();
                  console.log('commentdatayay', commentData)
        
                  if (commentData.commentId == commentid) {
                    
    
                    const commentDocRef = doc(commentsCollectionRef, commentDoc.id);
        
                    if (isLiked) {
                      setNumberOfLikes(prevLikes => prevLikes - 1);
                      await updateDoc(commentDocRef, { likes: commentData.likes - 1 });
                      localStorage.setItem(commentid, 'false');
                    } else {
                      setNumberOfLikes(prevLikes => prevLikes + 1);
                      await updateDoc(commentDocRef, { likes: commentData.likes + 1 });
                      localStorage.setItem(commentid, 'true');
                    }
                  }
                });
              }
        
              setIsLiked(prevIsLiked => !prevIsLiked);
              setIsButtonDisabled(false);
            }
          } catch (error) {
            console.log('Error updating like count:', error);
            setIsButtonDisabled(false);
          }
        };
  
    return (
      <>
        <ListItemAvatar>
          <Button
            size="small"
            startIcon={<ThumbUpAlt />}
            onClick={handleLikeClick}
            disabled={isButtonDisabled}
            sx={{ color: isLiked ? '#cc0000' : '#66b5ff' }}
          >
            {isLiked ? "UPVOTED" : "Upvote"} {numberOfLikes}
          </Button>
        </ListItemAvatar>
      </>
    );
  }
  
  export default CommentLikeButton;