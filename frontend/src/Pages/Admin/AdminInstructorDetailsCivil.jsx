import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, Divider, List, ListItem, Stack, Toolbar, Typography } from "@mui/material";


import AdminTopbar from "../../Components/AdminTopbar"



export default function LoginPage () {

  const buttonStyle = {
   
  
    border: 'none',
    textAlign:'left',
    borderRadius: '50px',
    padding: '12px 600px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '150px'
   
  };

  const buttonStyle1 = {
   
  
    border: 'none',
    textAlign:'center',
    borderRadius: '50px',
    padding: '12px 100px',
    textDecoration: 'none',
    //display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '50px'
   
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
                  Department of Civil and Environmental Engineering
                  </Typography>
              </CardContent>
              <div>
                
              <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
               <Button variant='contained' style={buttonStyle} sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Dr. S. H. K. K. Gunawickrama
               </Button>  
              </Stack>
              </div>
              <div>
                
                <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
                 <Button variant='contained' style={buttonStyle} sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Dr. P. D. C. Perera
                 </Button>  
                </Stack>
                </div>

              <div>
                
                <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
                 <Button variant='contained' style={buttonStyle} sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Dr. Rajitha Udawalpola
                 </Button>  
                </Stack>
                </div>

                <div>
                <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
                <Button variant='contained' style={buttonStyle} sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Mr. D. S. De Silva
                </Button>  
                </Stack>
                </div>

                <center>
             <div>
             <Button variant='contained' style={buttonStyle1} sx={{ width: 500 , alignItems:"center",textalignment:"center", backgroundColor:"#46B7C7"}}>Add Instructor
             </Button>  
             </div>

             </center>
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
