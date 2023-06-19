import Button from "@mui/material/Button/Button";
import { useState } from "react";

function LikeButton(props: { likes: number }) {
  // change of states will always be rerendered
   const likes = props.likes

  const [numberOfLikes, setNumberOfLikes] = useState(likes); 
  const [isLiked, setIsLiked] = useState(false); // google if initial value is // undefined
  const handleLikeClick = () => {
    if (isLiked) {
      setNumberOfLikes(numberOfLikes - 1);
    } else {
      setNumberOfLikes(numberOfLikes + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <>
      <Button
        size="small"
        variant={isLiked ? "contained" : "text"}
        onClick={handleLikeClick}
      >
        {isLiked ? "Unlike" : "Like"} {numberOfLikes}
      </Button>
    </>
  );
}

export default LikeButton;
