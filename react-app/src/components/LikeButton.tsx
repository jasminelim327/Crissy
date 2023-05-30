import Button from "@mui/material/Button/Button";
import { useState } from "react";

function LikeButton() {
  // change of states will always be rerendered

  const [numberOfLikes, setNumberOfLikes] = useState(0); 
  const [isLiked, setIsLiked] = useState(false); // google if initial value is // undefined

  return (
    <>
      <Button
        size="small"
        variant={isLiked ? "contained" : "text"}
        onClick={() => {
          setNumberOfLikes(numberOfLikes + 1);
          setIsLiked(true);
        }}
      >
        Like(s) {numberOfLikes}
      </Button>
    </>
  );
}

export default LikeButton;
