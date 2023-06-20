import { AppBar, Avatar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, Divider, List, ListItem, Stack, TextField, Toolbar, Typography } from "@mui/material";

export default function LoginPage () {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor:'#198897'}}>
          <Toolbar>
          <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={5}>
            <Avatar src="https://upload.wikimedia.org/wikipedia/en/6/65/LOGO_OF_RUHUNA.jpg"  sx={{ width: 56, height: 75 }} variant="square"/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"revert-layer" }}>
                UNIVERSITY OF RUHUNA
                </Typography>
                <Stack spacing={1} direction="row">
                <a href ="/login" ><Button variant="Text">You are not logging (Login)</Button></a>  
                    
                </Stack>
          </Stack> 
         </Toolbar>
        </AppBar>
      </Box>      
        </AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />       
            <Toolbar />
            <Box sx={{ flexGrow: 1,maxWidth: 2000, height: 850}} >
           
             <Card sx={{ maxWidth: 2000, height: 850}} >
             <CardActionArea >
            
            <center >
               <h1>Appointment Management System</h1>
                    <Stack sx={{backgroundColor:"#C5ECF1" }} direction = {'row'} height={300} width={500} alignItems={"center"} >
                    <Stack spacing={2} sx={{ width: '450' }} alignItems={"center"}>
                        
                    <TextField id="outlined-basic" label="Username" variant="outlined" sx={{backgroundColor:"#D9D9D9" ,width:400}} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" sx={{backgroundColor:"#D9D9D9" ,width:400}} />
                    
                    
                        <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"center"}>
                        <a href ="/AdminHome" ><Button variant='contained' sx={{ width: 500 , alignItems:"center", backgroundColor:"#46B7C7"}}>Login</Button></a> 
                            
                        </Stack>
                    </Stack>
                    </Stack>
                    
                    </center> 
          
                <CardContent>
                    <Stack direction = {'row'} height={150}></Stack> 
                <Divider />
                <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={30}>
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
                </CardContent>
                </CardActionArea>
            </Card>
            
            
      </Box>
          </Box>
        </Box>
        </Box>
    );
  }

