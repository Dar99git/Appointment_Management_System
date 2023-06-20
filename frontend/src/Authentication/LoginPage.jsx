import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, Divider, List, ListItem, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { CenterHeaderCard } from "../Components/CenterHeaderCard";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import LoginTopbar from "../Components/LoginTopbar";

export default function LoginPage() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [user, setUser] = useState(null); // Define the 'user' state

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      getUser();
      window.location = "/homestudent";
      alert("success");
    } catch (error) {
      alert("error");
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  const getUser = () => {
    axios
      .get(`http://localhost:8080/api/users/getOne/${data.email}`)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem('User', JSON.stringify(res.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <LoginTopbar />
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{ maxWidth: 800 }}>
            <CardActionArea>
              <CenterHeaderCard title={"Appointment Management System"}>
                <Stack sx={{ backgroundColor: "#C5ECF1" }} direction='row' height={300} width={500} alignItems='center'>
                  <Stack spacing={2} sx={{ width: { xs: '90%', sm: '80%', md: '70%' } }} alignItems='center'>
                    <TextField
                      type="email"
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                      required
                    />
                    <TextField
                      type="password"
                      label="Password"
                      name="password"
                      onChange={handleChange}
                      value={data.password}
                      required
                    />
                    {error && <div>{error}</div>}
                    <div>
                      <Link to="/AdminLogin"> If you are an admin, click here to log in</Link>
                    </div>
                    <Button type="submit" variant='contained' onClick={handleSubmit} sx={{ alignItems:"center" , width: '100%', backgroundColor: "#46B7C7" }}>
                      Login
                    </Button>
                  </Stack>
                </Stack>
              </CenterHeaderCard>
              <CardContent>
                <Stack direction='row' height={150}></Stack>
                <Divider />
                <Stack direction='column' flexGrow={1} alignItems='center' justifyContent='flex-start' spacing={3} sx={{ maxWidth: 800, p: 2 }}>
                  <Typography>
                    The Faculty of Engineering of the University of Ruhuna was established on 1st July 1999 at Hapugala, Galle. Admission to the Faculty of Engineering, University of Ruhuna, is subject to the University Grants Commission policy on university admissions.

                    </Typography>
              <Typography>
              <List>
                <ListItem variant="h5" gutterBottom>
                DEPARTMENTS
                </ListItem>
                <ListItem>
                Civil and Environmental Engineering
                </ListItem>
                <ListItem>
                Electrical and Information Engineering
                </ListItem>
                <ListItem>
                Mechanical and Manufacturing Engineering
                </ListItem>
                <ListItem>
                Interdisciplinary Studies
                </ListItem>    

              </List>  
              </Typography>
              <Typography>
                  <List>
                  <ListItem variant="h5" gutterBottom>
                  CONTACT US
                  </ListItem>
                  <ListItem>
                  Faculty of Engineering,Hapugala,Galle,Sri Lanka.
                  </ListItem>
                  <ListItem>
                  Phone: +(94)0 91 2245765/6
                  </ListItem>
                  <ListItem>
                  E-mail: webmaster@eng.ruh.ac.lk
                  </ListItem> 
                  </List>  
               </Typography>

              </Stack>
              </CardContent>
              </CardActionArea>
          </Card>
          
          
    </Box>

          </Box>
        </Box>
      
    );
  }
