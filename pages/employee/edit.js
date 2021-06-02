
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from 'swr';
import axios from 'axios';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Router from 'next/router';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { employeeController } from '../../controllers';
import { WarningTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  }
}));

export default function Editemployee() {
  let employee = "hola llega";
  const router = useRouter();
  const { nameToEdit } = router.query;
  const { rolPos } = router.query;
  const {gen} = router.query;
  const {arrel} = router.query;
  const classes = useStyles();
  //const { data } = useSWR('/employee', employeeController.getemployee(nameToEdit))
  // Select rolPositions
  
  const [rolPosition, setPosition] = React.useState(rolPos);
  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  let [female, setFemale] = React.useState(false);
  let [male, setMale] = React.useState(false);
  let [other, setOther] = React.useState(false);

  const [gender, setGender] = React.useState(gen);
  if(gender == "Female"){
    female=true;
  }else if(gender == "Male"){
    male=true;
  }else{
    other= true;
  }
  const handleChangeGender = (event) => {
    setGender(event.target.value);
    if(gender == "Female"){
      female=true
      male=false
      other=false
    }else if(gender == "Male"){
      female=false
      male=true
      other=false
    }else{
      female=false
      male=false
      other=true
    }
  };
  
  const [name, setName] = React.useState(nameToEdit);
  const handleChangeName = (event) => {
    setName(event.target.value); 
  };
  let split = arrel.split(',');

  let values = [false, false, false, false, false]
  let posibles = ["Inducción","Seguridad", "Normativa","Valores institucionales", "Terminología"]
  for(let i = 0; i < 5; i++){
    for(let y =0; y< split.length && !values[i]; y++){
      if(split[y]==posibles[i]){
        values[i]=true;
      }
    }    
  }

  const [courseone, setCourseone] = React.useState(values[0]);
  const handleChangeCourse1 = (event) => {
    setCourseone(!courseone);
  };

  const [coursetwo, setCoursetwo] = React.useState(values[1]);
  const handleChangeCourse2 = (event) => {
    setCoursetwo(!coursetwo);
  };

  const [coursethree, setCoursethree] = React.useState(values[2]);
  const handleChangeCourse3 = (event) => {
    setCoursethree(!coursethree);
  };
  
  const [coursefour, setCoursefour] = React.useState(values[3]);
  const handleChangeCourse4 = (event) => {
    setCoursefour(!coursefour);
  };

  const [coursefive, setCoursefive] = React.useState(values[4]);
  const handleChangeCourse5 = (event) => {
    setCoursefive(!coursefive);
  };

  // Checkboxes Courses
 
  // Terms and conditions
  const [checked, setChecked] = React.useState(false);
  let isDisable = true;

  const registeremployee = async event => {
    
    event.preventDefault()
    let courses = []
    if(courseone){
      courses.push("Inducción");
    }
    if(coursetwo){
      courses.push("Seguridad");
    }
    if(coursethree){
      courses.push("Normativa");
    }
    if(coursefour){
      courses.push("Valores institucionales");
    }
    if(coursefive){
      courses.push("Terminología");
    }
    const employee = {
      name: event.target["employee-name"].value,
      rolPosition: rolPosition,
      gender: gender,
      hasCourses: courses.length > 0,
      courses: courses
    } 

      console.log(employee)
      await employeeController.updateemployee(nameToEdit, employee)
      Router.push("/employee/list")
    
  }

  return (
    <Grid container component="main" style={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item
        xs={false}
        sm={4}
        md={7}
        style={{
          backgroundImage:
            "url(https://i.ibb.co/BCW4XLD/Employer-and-Employee-FAQs.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      </Grid>


      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div
          className={classes.paper}
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            marginLeft: "32px",
            marginRight: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar style={{ margin: "8px 8px"}}>
          </Avatar>
          <Typography variant="h3">
            Editar un empleado
          </Typography>
          <form onSubmit={registeremployee} noValidate style={{ width: "100%", marginTop: "8px" }}>
            <TextField
              margin="normal"
              fullWidth
              id="employee-name"
              label="Nombre del empleado *"
              name="employee-name"
              value={name}
              onChange={handleChangeName}
            />
            <InputLabel
              id="demo-simple-select-label"
              style={{
                marginTop: "16px",
                minWidth: "120px",
                fontSize: "0.75rem",
              }}
            >
             <h2> Categoría *</h2>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="rolPosition"
              value={rolPosition}
              onChange={handleChange}
              style={{ minWidth: "120px" }}
            >
              <MenuItem value={"Administrativo"}>Administrativo</MenuItem>
              <MenuItem value={"De planta"}>De planta</MenuItem>
              <MenuItem value={"Temporal"}>Temporal</MenuItem>
              <MenuItem value={"Auxiliar"}>Auxiliar</MenuItem>
              <MenuItem value={"Aseo"}>Aseo</MenuItem>
              <MenuItem value={"Seguridad"}>Seguridad</MenuItem>
            </Select>
            <div style={{ marginTop: "16px" }}>
              <div>
                  <h2>Género *</h2>
              </div>
                  
              <input type="radio" id="female" value="Female" name="gender" 
                    onChange={handleChangeGender} checked = {female}/>
                   <label>Femenino</label>
                  <input type="radio" id="male" value="Male" name="gender"
                    onChange={handleChangeGender} checked ={male}/>
                  <label>Masculino</label>
                  <input type="radio" id="other" value="Other" name="gender" 
                    onChange={handleChangeGender} checked = {other}/>
                  <label>Otro</label>
            </div>
            <div style={{ marginTop: "16px" }}>
            <h2>¿Con qué cursos cuenta?</h2>
                <div>
                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse1}
                      name="induccion"
                      checked={courseone}
                    />
                  }
                  label="Inducción"
                /></p>
                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse2}
                      name="seguridad"
                      checked={coursetwo}
                    />
                  }
                  label="Seguridad"
                /></p>
                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse3}
                      name="normativa"
                      checked={coursethree}
                    />
                  }
                  label="Normativa"
                /></p>

                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse4}
                      name="valores"
                      checked={coursefour}
                    />
                  }
                  label="Valores institucionales"
                /></p>

                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse5}
                      name="terminologia"
                      checked={coursefive}
                    />
                  }
                  label="Terminología"
                /></p>
            </div>
            </div>
            <Button
              data-testid="register-button"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={gender=="" || rolPosition == "" || name == ""}
              style={{
                marginTop: "16px",
                marginBottom: "24px",
                marginLeft: "0px",
                marginRight: "16px",
              }}
            >
              EDITAR
            </Button>
            
          </form>
          <Button
              data-testid="register-button"
              type="cancel"
              fullWidth
              variant="contained"
              color="primary"
              style={{
                marginTop: "16px",
                marginBottom: "24px",
                marginLeft: "0px",
                marginRight: "16px",
              }}
              href="/employee/list/"
            >
              CANCELAR
            </Button>
        </div>
      </Grid>
    </Grid>
  );
}
