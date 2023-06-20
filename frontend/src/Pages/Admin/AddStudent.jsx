import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { AppBar, Box, Button, CardContent, Chip, CssBaseline, Divider, FormControl, Select, MenuItem, Grid, List, ListItem, Stack, TextField, Toolbar, Typography } from "@mui/material";
import AdminTopbar from "../../Components/AdminTopbar";

export default function AddStudent() {

	const [data, setData] = useState({
		firstName: "",
    lastName: "",
    fullName: "",
    regNo: "",
    email: "",
    department: "",
    telephoneNo: "",
    password: "",
    role: ""
 
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/AddStudent");
      alert("created");
			console.log(res.message);
		} catch (error) {
      alert("ttr");
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
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
          <Toolbar/>
          <Stack direction="row" spacing={0}>
          <Button variant='text' >Student - </Button> 
          <Button variant='text' >21 st Batch</Button> 
          </Stack>
            
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#FFFFFF",height: '100%'}}>
           
            <Grid item xs={8} md={9}>
              <Box p={2}>
                <CardContent>
                    <Toolbar/>
                <Stack direction="row" spacing={4}>
                <Chip label="First Name" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <TextField label="" name="firstName" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }} 
                onChange={handleChange}
                value={data.firstName}
                required
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>

                <Stack direction="row" spacing={4}>
                <Chip label="Last Name" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <TextField label="" name="lastName" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }} 
                onChange={handleChange}
                value={data.lastName}
                required
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>

                <Stack direction="row" spacing={4}>
                <Chip label="Full Name" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <TextField label="" name="fullName" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }}
                onChange={handleChange}
                value={data.fullName}
                required
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Registration No." sx={{ fontSize: "1.0rem", width: "25%" }} />
                <TextField label="" name="regNo" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }}
                onChange={handleChange}
                value={data.regNo}
                required
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Department" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <TextField label="" name="department" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }}
                onChange={handleChange}
                value={data.department}
                required
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>

            
                <Stack direction="row" spacing={4}>
                <Chip label="Telephone No." sx={{ fontSize: "1.0rem", width: "25%" }} />
                <TextField label="" name="telephoneNo" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }}
                onChange={handleChange}
                value={data.telephoneNo}
                required
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>

                <Stack direction="row" spacing={4}>
                <Chip label="Student Mail" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <TextField label="" name="email" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }}
                onChange={handleChange}
                value={data.email}
                required
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Password" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <TextField label="" name="password" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }}
                onChange={handleChange}
                value={data.password}
                required
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>

                <Stack direction="row" spacing={4}>
                <Chip label="Role" sx={{ fontSize: "1.0rem", width: "25%" }} />
                

                <FormControl size="small" sx={{ fontSize: "1.0rem", width: "50%" }}>
                 
                  <Select
                    label=""
                    id="standard-size-small"
                    value={data.role}
                    name="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Lecturer</MenuItem>
                    <MenuItem value={20}>Instructor</MenuItem>
                    <MenuItem value={30}>Student</MenuItem>
                  </Select>
                </FormControl>
                

                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:30}}></Stack>

                <Stack direction='row'  justifyContent='flex-end'  flexGrow={1} sx={{ height: 30 , width: "77%"}}>
                <Button variant='contained' onClick={handleSubmit} sx={{ width: '20%' }}>Create Profile</Button> 
                </Stack>

                </CardContent>
              </Box>
            </Grid>
          </Box>
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
                <ListItem
                 variant="h5" gutterBottom>
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