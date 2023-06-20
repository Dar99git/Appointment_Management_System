import { AppBar, Box, Button, CardContent, CardMedia, Chip, CssBaseline, Divider, Grid, List, ListItem, Stack, Toolbar, Typography } from "@mui/material";
import MainTopbar from "../Components/MainTopbar";
import { useState, useEffect } from "react";

export default function SAccountPage () {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = localStorage.getItem('User');
  
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
  
        setUser(parsedUser.User);
      }
      
    }, []);

    if (user == null) {
        return <div>Loading</div>
      }
    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <MainTopbar/>      
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Toolbar />
          <Grid container spacing={0}>
            <Grid item xs={4} md={3} sx={{borderRight: 1, borderColor: 'divider'}}>
              <Box p={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '50%', height: 'auto' }}>
                    <Toolbar/>
                  <CardMedia
                    sx={{ height: 300 }}
                    image="https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80"
                    title="green iguana"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8} md={9}>
              <Box p={2}>
                <CardContent>
                    <Toolbar/>
                <Stack direction="row" spacing={4}>
                <Chip label="Name" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width: "50%" }}
                    label={
                    <Stack direction="row" spacing={1} >
                        {user.fullName}
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Registration No." sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width: "50%" }}
                    label={
                    <Stack direction="row" spacing={1} >
                        {user.regNo}
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Student Mail" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width: "50%" }}
                    label={
                    <Stack direction="row" spacing={1} >
                        {user.email}
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Department" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width:"50%" }}
                    label={
                    <Stack direction="row" spacing={1} >
                        {user.department}
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Contact No." sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width: "50%" }}
                    label={
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", textAlign: "left" }}>
                        {user.telephoneNo}
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:30}}></Stack>

                <Stack direction='row'  justifyContent='flex-end'  flexGrow={1} sx={{ height: 30 , width: "77%"}}>
                <Button variant='contained' sx={{ width: '20%' }}>EDIT BIO</Button> 
                </Stack>

                </CardContent>
              </Box>
            </Grid>
          </Grid>
          
        </Box>
        <Stack direction = {'row'} height={100}></Stack> 
              
              <Divider/>
              
              <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={30} sx={{ bgcolor:""}}>
              <Typography width={500}>
                  
               The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle.
               Admission to the Faculty of Engineering, University of Ruhuna, is subject to the University Grants Commission
               policy on university admissions.

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

      </Box>
    </Box>
  );
}