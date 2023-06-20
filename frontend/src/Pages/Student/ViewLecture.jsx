import { AppBar, Box, CardMedia, CssBaseline, Grid, List, ListItem, Stack, Toolbar, Typography } from "@mui/material";

import { ViewState } from '@devexpress/dx-react-scheduler';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';



import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './today-appointments'
import MainTopbar from "../../Components/MainTopbar";


const SelectedDate = ({selectedDate}) => {
  return (
    <Typography variant="h6" sx={{ mb: 2 , textAlign :"center"}}>
      Selected Date: {selectedDate.format("ddd DD MMMM")}
    </Typography>
  );
};

export default function ViewLecture () {

  const [selectedDate, setSelectedDate] = React.useState(dayjs);
  
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };


  

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
           <MainTopbar/>      
        </AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar/>
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#ffffff", height: '100%' }}>
            <Toolbar />
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
            <Grid item xs={2} md={2} sx={{borderRight: 1, borderColor: 'divider'}}>
                <Box p={2}>
                <CardMedia
                    sx={{ height: 300 }}
                    image="https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80"
                    title="green iguana"
                  />

                <Typography variant="body1" gutterBottom >
                    <List>
                    <ListItem>
                    Mr. D.S. De Silva
                    </ListItem>
                    <ListItem>
                    Senior Lecturer
                    </ListItem>
                    <ListItem>
                    Msc in Mobile Communication(Adger, Norway), PDBA(Ruhuna), BScEng(Hons)(Ruhuna)
                    </ListItem>
                    <Toolbar />

                    <ListItem >
                    Contact Info
                    </ListItem>
                    <ListItem variant="body2" gutterBottom>
                        +94710100888
                        saman@eie.ruh.ac.lk
                        Room E211
                    </ListItem>    

                </List>         
                </Typography>


                </Box>
                </Grid>
                <Grid item xs={10} md={10}>
                <Stack spacing={10} direction="row" flexGrow = {1} alignItems="center" justifyContent="flex-start">
                <Paper sx={{ flexGrow: 1, width: '100%' , backgroundColor:''}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography variant="h6" sx={{ mb: 2 , textAlign :"center"}}>
                   Selected Date: {selectedDate.format("ddd DD MMMM")}
                </Typography>
                <StaticDatePicker
                   displayStaticWrapperAs="desktop"
                   value={selectedDate}
                   onChange={handleDateChange}
                   slotProps={{
                     toolbar: { toolbarFormat: 'ddd DD MMMM', hidden: false },
                   }}
                 />                                       
                </LocalizationProvider>
                                   
                </Paper>
                
                <Paper>

                <Paper>
                <Scheduler data={appointments}>
                <ViewState currentDate={selectedDate.toDate()} />
                
                <DayView startDayHour={8} endDayHour={13} />
                <Appointments />
                <AppointmentTooltip showOpenButton/>
                <AppointmentForm />
                
                <AppointmentTooltip />
                </Scheduler>
                </Paper>
              
                </Paper>
              </Stack>
                </Grid>
                
                
              
                </Grid>
        
            </Box>
           
          </Box>
        </Box>
        </Box>
      </Box>
    );
    }




// npm install @mui/x-date-pickers@^5.0.15
// npm i --save @devexpress/dx-react-core @devexpress/dx-react-scheduler
// npm i --save @devexpress/dx-react-scheduler-material-ui