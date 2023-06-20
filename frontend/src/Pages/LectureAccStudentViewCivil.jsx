import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Stack, Toolbar, Typography } from "@mui/material";
import SideDrawer from "../Components/SideDrawer";
import { Grid } from '@mui/material';
import LectureAccStudentViewTopbar from "../Components/LectureAccStudentViewTopbar";
import LectureImg from '../Images/LectureImg.jpg'



export default function HomeStudent () {


  const buttonStyle3 = {
   
  
    position: 'absolute',
    width: '246px',
    height: '57px',
    left: '412px',
    top: '550px',
    borderRadius: '50px',
   
  };


    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <LectureAccStudentViewTopbar/>      
        </AppBar>
        <SideDrawer/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
            
                <Grid item xs={12} md={6} sx={{borderRight: 1, borderColor: 'divider'}}>
                <Box p={2}>
                
                </Box>
                <Card sx={{ maxWidth: 300, height: 400}}>
                  <CardContent>

                    <CardMedia  >
                    <img src={LectureImg} alt="LectureImg"  style={{ width: '254px', height: '276px%' }}/>
                    </CardMedia>

                       <Typography textAlign={'center'}>
                        Dr. Rajitha Udawalpola
                        </Typography>
                        <Typography textAlign={'center'}>Head, Senior Lecturer</Typography>
                        
                        <Typography textAlign={'center'}> PhD (Uppsala, Sweden),</Typography>
                        
                     <Typography textAlign={'center'}>
                        BScEng (Hons) (Peradeniya)  </Typography>
                        <Typography textAlign={'center'}>Github</Typography>
                        
                  

                    <CardActions>

                    <Stack >
                    <Button variant='contained' style={buttonStyle3} sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>View Details</Button> 
                    </Stack>
                    </CardActions>

                  </CardContent>
                </Card>

                <Grid item xs={12} md={6}>
                <Box p={2}>
                    
                </Box>
                
             
                </Grid>
            </Grid>
            </Box>
        </Box>

        
        </Box>
      
    );
  }