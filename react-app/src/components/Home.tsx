import { Paper } from "@mui/material"
import Login2 from "./Login2"
import Profile from "./Profile"


function Home () {

    const heading1Style = {textAlign: "center", padding:50, backgroundColor: 'darkgrey'}

    const imgMyimageexample = 'https://images.unsplash.com/photo-1683490486227-4d99157db504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60';

    const divStyle = {
        backgroundImage: `url(${imgMyimageexample})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100VH'

};

 
    return (

    <>
    
      <div className="cComponent" style={divStyle} >
      <Login2></Login2>
      </div>
     </>
    );
  }
//     return (

//     <>
//     <Paper sx={{ backgroundImage: `https://images.unsplash.com/photo-1683490486227-4d99157db504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60`}}>

    
   

//     </Paper>
//     </>
//     )

// }

export default Home

