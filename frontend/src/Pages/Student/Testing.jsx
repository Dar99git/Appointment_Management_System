import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { ViewState } from '@devexpress/dx-react-scheduler';

import {  AppBar, Box,  CardContent, Stack, Typography } from "@mui/material";
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, ListItem, List, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from '@mui/material';

import MainTopbar from '../../Components/LectureAccStudentViewTopbar';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Paper from '@mui/material/Paper';
//import {DataGrid} from '@mui/x-data-grid';
//import { appointments } from './appointments';

const date = ({date}) => {
    return (
      <Typography variant="h6" sx={{ mb: 2 , textAlign :"center"}}>
        Selected Date: {date.format("ddd DD MMMM")}
      </Typography>
    );
  };

const Testing = () => {
  //const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('User');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setmaker(parsedUser.User.regNo);
    }
    
  }, []);


  //getting appointment data from DB
  const [appointments, setappointments] = useState([]);
  
  // useEffect(() => {
  //   //getapppointments();
  // }, []);

  //   function getapppointments(formattedTime) {
  //     axios
  //       .get(`http://localhost:8080/api/appointments/getOne/${formattedTime}`)
  //       .then((res) => {
  //         const result = res.data;

  //         setappointments(result.Appointment);
  //       })

  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   }
    
  



  const [subject, setsubject] = useState('');
	const [time, settime] = useState("");
	//const [date, setdate] = useState("");
	const [maker, setmaker] = useState("");

//
const [Tempory, setTempory] = useState("");
//



  function sentData(e){
		e.preventDefault();
		
		const newAppointment = {
			subject,
      time,
      date: date.format("ddd DD MMMM"),
      maker,
		}
		
		axios.post("http://localhost:8080/api/appointments/add",newAppointment).then(()=>{
			alert("Appointment Added")
		}).catch((err)=>{
			alert(err)
		})
		
	}

  const [date, setdate] = React.useState(dayjs);
  const [data, setData] = useState({ 
    subject: "",
    // date:"",
    // time:""
  });
  async function handleDateChange (newDate) {
    
    const result =  await axios.get("http://localhost:8080/api/appointments/get?date="+newDate.format("ddd DD MMMM"));
    setappointments(result.data.Appointment);
    setdate(newDate);
  };

    const startTime = new Date();
    startTime.setHours(8, 30, 0); // Set start time to 8.30 AM
   
    //const [notes, setNotes] = useState('');

    // const handleSubjectChange = (event) => {
    //   setsubject(event.target.value);
    // };

    const handleDoubleClick = (time) => {
        settime(time);
      };

    const handleClose = () => {
        settime(null);
      };

      const handleChange = ({ currentTarget: input }) => {
        
		setData({ ...data, [input.name]: input.value });
	};



  const getSlotData = (time) =>{
    console.log(appointments);
    const times = appointments.map(appointment => appointment.time);

    //console.log(times);
    if (times.includes(time)) {
      return "Booked";
    }else{
      return "Free";
    }

  }

    

    
    const handleSave = () => {
        console.log(`Appointment for ${time}: Subject: ${subject}`);
        settime(null);
        //setSubject('');
        //setNotes('');
      };
    
    
      const rows = [];
      for (let i = 0; i < 12; i++) {
        const time = new Date(startTime.getTime() + i * 30 * 60000); // Increment time by 30 minutes
        const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        //getapppointments(formattedTime);
        rows.push(
          <TableRow key={i}>
            
            <TableCell >{formattedTime}</TableCell>
            <TableCell onDoubleClick={() => handleDoubleClick(formattedTime)}>{getSlotData(formattedTime)}</TableCell>
          </TableRow>
        );
      }

      if (maker == null) {
        return <div>Loading</div>
      }


      const boxstyle = {
   
  
        position: 'absolute',
        width: '950px',
        height: '1px',
        left: '500px',
        top: '1px',
       
      };

  return (
    <Box >

        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <MainTopbar/>      
        </AppBar>
      
      <Stack direction = {'row'} flexGrow = {1} sx={{ height:150}}></Stack>
      <Box  sx={{
                   top:'100px',
                   height:'100px',
                    width:'30%',
                   
                }}>
                <Stack spacing={10} direction="row" flexGrow = {1} alignItems="left" justifyContent="flex-start"  style={{ marginRight: '1spx' }}>
                <Paper sx={{ flexGrow: 1, width: '100%' , backgroundColor:''}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography variant="h6" sx={{ mb: 2 , textAlign :"left"}}>
                   Selected Date: {date.format("ddd DD MMMM")}
                </Typography>
                <StaticDatePicker
                   displayStaticWrapperAs="desktop"
                   value={date}
                   onChange={handleDateChange}
                   slotProps={{
                     toolbar: { toolbarFormat: 'ddd DD MMMM', hidden: false },
                   }}
                 />                                       
                </LocalizationProvider>
                                   
                </Paper>
                </Stack>
                </Box>









              <Box  style={boxstyle}  sx={{left: '100px',height:'100px',width:'70%'}}
               
                >
                    <Typography
                    variant='h6'
                    component='h6'
                    sx={{textAlign:'center',mt:3,mb:3}}
                    >
                          Selected Date:   {date.format("ddd DD MMMM")}
                    </Typography>

                    <>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="appointment table">
                        <TableHead>
                            <TableRow>
                            <TableCell>Time</TableCell>
                            <TableCell>Subject</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{rows}</TableBody>
                        </Table>
                    </TableContainer>

                    <Dialog open={time !== null} onClose={handleClose}>
                        <DialogTitle>{`Appointment for ${time} `}</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Please enter the details of your appointment.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            name='subject'
                            margin="dense"
                            id="subject"
                            label="Subject"
                            type="text"
                            fullWidth
                            value={subject}
                            onChange={(e)=>{
                              setsubject(e.target.value);
              
                            }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name='time'
                            id="time"
                            label="time"
                            type="text"
                            fullWidth
                            value={time}
                            onChange={(e)=>{
                              settime(e.target.value);
              
                            }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name='date'
                            id="date"
                            label="date"
                            type="text"
                            fullWidth
                            value={date.format("ddd DD MMMM")}
                            onChange={(e)=>{
                              setdate(e.target.value);
              
                            }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name='maker'
                            id="maker"
                            label="maker"
                            type="text"
                            fullWidth
                            value={maker}
                            onChange={(e)=>{
                              setmaker(e.target.value);
              
                            }}
                        />
                        
                        {/* <TextField
                            margin="dense"
                            id="notes"
                            label="Notes"
                            type="text"
                            fullWidth
                            multiline
                            rows={4}
                            value={notes}
                            onChange={handleNotesChange}
                        /> */}
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={sentData} >Save</Button>
                        {/* disabled={!subject} */}
                        </DialogActions>
                    </Dialog>
                    </>

              </Box>

         

              <Stack direction = {'row'} flexGrow = {1}sx={{ height:600}}></Stack>

<Box>
<Card>
  <CardContent>
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
              </CardContent>
              </Card>


</Box>

    </Box>

    
  )
};

export default Testing