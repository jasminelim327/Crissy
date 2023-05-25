import {
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import NavBar from "./NavBar";

export default function Profile() {
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [topicsOfInterest, setTopicsOfInterest] = useState<string[]>([]);
  const options = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (


    <>
    <NavBar></NavBar>

<Grid container spacing={2}>
     
<Grid container spacing={2}>
      <Grid item>
      <img src="https://images.unsplash.com/photo-1683490486227-4d99157db504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" width={1800} height={200}/>

      </Grid>
    </Grid>
      
</Grid>

            
      <Grid container spacing={2}>
        {/* basic details */}
        <Grid item xs={12}>
          <Card sx={{ minWidth: 275, id: "Basic Details" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: 20,
                  color: "text.secondary",
                  gutterBottom: 1,
                }}
              >
                Basic Details
              </Typography>

                <Grid spacing="2">
              <FormControl variant="standard" sx={{ margin: 2 }}>
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input id="component-simple" defaultValue="" />
              </FormControl>
              

              <FormControl variant="standard" sx={{ margin: 2 }}>
                <InputLabel htmlFor="component-simple">Email Address</InputLabel>
                <Input id="component-simple" defaultValue="" />
              </FormControl>
              </Grid>

              <Grid spacing="2">

              <FormControl variant="standard" sx={{ margin: 2 }}>
                <InputLabel htmlFor="component-simple">Password</InputLabel>
                <Input id="component-simple" defaultValue="" />
              </FormControl>

              </Grid>

              <Grid spacing="2">
              <FormControl variant="standard" sx={{ margin: 2 }}>
                  <InputLabel htmlFor="component-simple">Gender</InputLabel>
                  <Select
                    name="gender"
                    id="gender"
                    className="form-control"
                    defaultValue="Sex"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    {options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>

              <FormControl variant="standard" sx={{ margin: 2 }} role="date">
                <InputLabel htmlFor="component-simple">Birthdate</InputLabel>
                <Input type="date" name="birthdate" id="birthdate" className="form-control" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
              </FormControl>

              </Grid>

              <FormControl variant="standard" sx={{ margin: 2 }} role="checkboxgroup">
                <InputLabel htmlFor="component-simple">Topics of Interest</InputLabel>
                <div className="chips">
                  {topicsOfInterest.map((topic, index) => (
                    <input
                      key={index}
                      type="checkbox"
                      name="topics_of_interest[]"
                      value={topic}
                      checked={topicsOfInterest.includes(topic)}
                      onChange={(e) => {
                        const newTopicsOfInterest = topicsOfInterest.filter(
                          t => t !== topic
                        );
                        if (e.target.checked) {
                          newTopicsOfInterest.push(topic);
                        }
                        setTopicsOfInterest(newTopicsOfInterest);
                      }}
                    />
                  ))}
                </div>
              </FormControl>
            </CardContent>
            <Button sx={{margin:2}}variant="contained" href="/">Save</Button>
          </Card>
        </Grid>

        
      </Grid>
    </>
  );
}
