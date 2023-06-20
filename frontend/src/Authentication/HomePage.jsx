import { AppBar, Card, CardActionArea, CardContent, CardMedia, CssBaseline, Divider, Grid, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

import LoginTopbar from "../Components/LoginTopbar";

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <LoginTopbar/>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Toolbar />

          <Box sx={{ flexGrow: 1, maxWidth: 2000, height: 850 }}>
            <Card sx={{ maxWidth: 2000, height: 850 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div" textAlign="center" color="#063970">
                    Faculty of Engineering - Appointment Management System
                  </Typography>
                </CardContent>
                <CardMedia 
                  sx={{ height: 350, maxWidth: 800, margin: 'auto' }}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcTPL95uMdC3Sk2YhlZqbhN00B20ve2f2XAPTinEX8FpEtYzhxDBs6ervxUgEEo5LLfU&usqp=CAU"
                />
                <Divider />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography>
                      The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle.
                      Admission to the Faculty of Engineering, University of Ruhuna, is subject to the University Grants Commission
                      policy on university admissions.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
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
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <List>
                      <ListItem variant="h5" gutterBottom>
                        CONTACT US
                      </ListItem>
                      <ListItem>
                        Faculty of Engineering, Hapugala, Galle, Sri Lanka.
                      </ListItem>
                      <ListItem>
                        Phone: +(94)0 91 2245765/6
                      </ListItem>
                      <ListItem>
                        E-mail: webmaster@eng.ruh.ac.lk
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
