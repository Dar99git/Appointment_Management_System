import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, Divider, List, ListItem, Stack, Toolbar, Typography } from "@mui/material";


import AdminTopbar from "../../Components/AdminTopbar"




export default function LoginPage () {

  const buttonStyle = {
   
  
    border: 'none',
    textAlign:'left',
    borderRadius: '50px',
    padding: '12px 600px',
    textDecoration: 'none',
    // display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '150px'
  
   
  };


    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <AdminTopbar/>      
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
             <CardContent >
                  <Typography gutterBottom variant="h3" component="div" textAlign={"left"} color="#063970" >
                      Lecturers
                  </Typography>
              </CardContent>
              <div>
                
              <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
               <a href ="/AdminLectureDetailsCivil" > <Button variant='contained' style={buttonStyle}  sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Department of Civil and Environmental Engineering
               </Button>  </a>
              </Stack>
              </div>
              <div>
                
                <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
                <a href ="/AdminLectureDetailsElec" ><Button variant='contained' style={buttonStyle} sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Department of Electrical and Environmental Engineering
                </Button>  </a>
                </Stack>
                </div>

                <div>
                
                <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
                <a href ="/AdminLectureDetailsMechanical" > <Button variant='contained' style={buttonStyle} sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Department of Mechanical and Manufacturing Engineering
                 </Button>  </a>
                </Stack>
                </div>
             
              <Stack direction = {'row'} height={100}></Stack> 

            
               
              <Divider  />
        
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
              
              </CardActionArea>
          </Card>
          
          
    </Box>
           
          </Box>
        </Box>
        </Box>
    
    );
  }
