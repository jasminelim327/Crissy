import Login from "./Login"
import Profile from "./Profile"


function Home () {

    const heading1Style = {textAlign: "center", padding:50, backgroundColor: 'darkgrey'}
    return (

    <>

    <h1 style={heading1Style}>Welcome to INSPIRE 2023</h1>
    <Login></Login>
    </>
    )

}

export default Home

