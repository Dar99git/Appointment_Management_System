import { AppBar, Box, Button, Chip, CssBaseline, Stack, Toolbar } from "@mui/material";
import MainTopbar from "../Components/MainTopbar";
import SideDrawer from "../Components/SideDrawer";
import { Grid } from '@mui/material';
import { useState, useEffect } from "react";
import MuiResponsiveness from "../Components/MuiResponsiveness";

export default function HomeStudent () {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('User');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser(parsedUser.User);
    }
    
  }, []);
  

    return (
      <Box sx={{ display: 'flex' }}>
        <MuiResponsiveness/>
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
          <Box sx={{ flexGrow: 1 }} MuiResponsiveness>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} sx={{borderRight: 1, borderColor: 'divider'}}>
                <Box p={2}>
                <Chip label="Scheduled Appointments" sx={{ fontSize: "1.2rem" }} />
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box p={2}>
                    <Chip label="Notifications" sx={{ fontSize: "1.2rem" }} />
                </Box>
                </Grid>
                <button>student</button>
                <button>lecturer</button>
            </Grid>

            <div>
            <Stack direction = {'row'} flexGrow = {1}sx={{ height:400}}></Stack>
            <Stack spacing={2} direction="row" sx={{ height:'100', width: '450' }} alignItems={"left"}>
                <a href ="/StaffDetailsElec" ><Button variant='contained' sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>VIEW
                </Button>  </a>
                </Stack>
                </div>

               

                <a href ="/Tpage3" ><Button variant='contained' sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>t page 3

                </Button>  </a>
             
                <a href ="/Testing" ><Button variant='contained' sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Testing
                </Button>  </a>

                <a href ="/LAccountPage" ><Button variant='contained' sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>Testing new
                </Button>  </a>
              
                <a href ="/Tpage1" ><Button variant='contained' sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>image uploading page
                </Button>  </a>

                <a href ="/Tpage2" ><Button variant='contained' sx={{ width: 500 , alignItems:"left",textalignment:"left", backgroundColor:"#46B7C7"}}>image uploading page 2
                </Button>  </a>
             


           

          
            </Box>
        </Box>
        </Box>
      
    );
  }