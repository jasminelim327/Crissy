import Button from "@mui/material/Button/Button"
import { useState } from "react"

function LikeButton() {
    // change of states will always be rerendered 
   
    const [numberOfLikes, setNumberOfLikes] = useState(0); // google if initial value is 
    // undefined
    const [isLiked, setIsLiked] = useState(false); // google if initial value is 
    // undefined
    const buttonStyle = {
        variant: isLiked ? "contained" : "text",
      };
    
    return (
        <>
        
        <Button size="small"  variant={isLiked ? "contained" : "outlined"} onClick={() => {setNumberOfLikes(numberOfLikes + 1); setIsLiked(true)}}  sx={{
      variant: buttonStyle.variant,
    }}>
            Like(s) {numberOfLikes}
            

        </Button>

        </>
    )
    

}


export default LikeButton