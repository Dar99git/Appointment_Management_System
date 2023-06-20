import { AppBar, Box, Button, Stack, CssBaseline, Toolbar, Typography } from "@mui/material";
import MainTopbar from "../Components/MainTopbar";
import SideDrawer from "../Components/SideDrawer";
import { Grid } from '@mui/material';

export default function HomeStudent () {

    const buttonStyle = {
   
  
        border: 'none',
        textAlign:'left',
        borderRadius: '50px',
        padding: '12px 400px',
        textDecoration: 'none',
        //display: 'inline-block',
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
            <MainTopbar/>      
        </AppBar>
        <SideDrawer/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
         
                <Grid item xs={12} md={6} sx={{borderRight: 1, borderColor: 'divider'}}>
                <Typography gutterBottom variant="h4" component="div" textAlign={"left"} color="#063970">
                    Academic Staff
                </Typography>

                <Stack direction = {'row'} flexGrow = {1}sx={{ height:30}}></Stack>

                <div>
                
                <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
                 <a href ="/LectureAccStudentView" > <Button variant='contained' style={buttonStyle}  sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Lecturers
                 </Button>  </a>
                </Stack>
                </div>
               
  
                <div>
                
                <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"left"}>
                 <a href ="/InstructorAccStudentView" > <Button variant='contained' style={buttonStyle}  sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>instructors
                 </Button>  </a>
                </Stack>
                </div>
               
  
                 

                
                </Grid>
                
          
            </Box>
        </Box>
        </Box>
      
    );
  }