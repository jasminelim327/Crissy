import Button from "@mui/material/Button/Button"
import { useState } from "react"

function LikeButton(){
    // change of states will always be rerendered 
    const [numberOfLikes, setNumberOfLikes] = useState(0); // google if initial value is undefined

    return (
        <>
        
        <Button size="small" onClick={() => setNumberOfLikes(numberOfLikes + 1)}>
            Like(s) {numberOfLikes}
            
        </Button>

        </>
    )
    

}


export default LikeButton