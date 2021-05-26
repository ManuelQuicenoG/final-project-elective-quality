
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
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Router from 'next/router';
import React from 'react';
import { employeeController } from '../../controllers';


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  }
}));
export default function Registeremployee({ employees }) {
  const classes = useStyles();

  // Select rolPositions
  const [rolPosition, setPosition] = React.useState("");
  const handleChange = (event) => {
    setPosition(event.target.value);
  };


  const [gender, setGender] = React.useState("");
  const handleChangeGender = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  const [name, setName] = React.useState("");
  const handleChangeName = (event) => {
    setName(event.target.value); 
  };


  const [courseone, setCourseone] = React.useState(false);
  const handleChangeCourse1 = (event) => {
    setCourseone(event.target.checked);
  };

  const [coursetwo, setCoursetwo] = React.useState(false);
  const handleChangeCourse2 = (event) => {
    setCoursetwo(event.target.checked);
  };

  const [coursethree, setCoursethree] = React.useState(false);
  const handleChangeCourse3 = (event) => {
    setCoursethree(event.target.checked);
  };
  
  const [coursefour, setCoursefour] = React.useState(false);
  const handleChangeCourse4 = (event) => {
    setCoursefour(event.target.checked);
  };

  const [coursefive, setCoursefive] = React.useState(false);
  const handleChangeCourse5 = (event) => {
    setCoursefive(event.target.checked);
  };

  // Checkboxes Courses
 
  // Terms and conditions
  const [checked, setChecked] = React.useState(false);
  let isDisable = true;
  const handleChangeTermsConditions = (event) => {
    setChecked(event.target.checked);
    isDisable = !isDisable;
  };

  const registeremployee = async event => {
    
    event.preventDefault()
    let courses = []
    console.log(courseone + ", " + coursetwo + ", "+ coursethree + ", "+ coursefour + ", "+ coursefive + ", ")
    console.log("c1" +!courseone);
    console.log("c2" +!coursetwo);
    console.log("c3" +!coursethree);
    console.log("c4" +!coursefour);
    console.log("c5" +!coursefive);
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
    console.log(courses);
    const employee = {
      name: event.target["employee-name"].value,
      rolPosition: rolPosition,
      gender: gender,
      hasCourses: courses.length > 0,
      courses: courses
    } 
    try{
      await employeeController.register(employee)
      console.log(employee)
      Router.push("/employee/list")
    }catch(error){
      window.alert("Un empleado con ese nombre ya se encuentra registrado");
    }
    
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
            Registro de empleados
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
                    onChange={handleChangeGender}/>
                   <label>Femenino</label>
                  <input type="radio" id="male" value="Male" name="gender"
                    onChange={handleChangeGender}/>
                  <label>Masculino</label>
                  <input type="radio" id="other" value="Other" name="gender" 
                    onChange={handleChangeGender}/>
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
                    />
                  }
                  label="Inducción"
                /></p>
                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse2}
                      name="seguridad"
                    />
                  }
                  label="Seguridad"
                /></p>
                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse3}
                      name="normativa"
                    />
                  }
                  label="Normativa"
                /></p>

                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse4}
                      name="valores"
                    />
                  }
                  label="Valores institucionales"
                /></p>

                <p><FormControlLabel
                  control={
                    <input type ="checkbox"
                      onChange={handleChangeCourse5}
                      name="terminologia"
                    />
                  }
                  label="Terminología"
                /></p>
            </div>
            </div>
            <div style={{ marginTop: "16px", marginLeft: "260px", rolPosition: "relative" }}>
              <FormControlLabel
                control={
                  <input type ="checkbox"
                    id="terms-and-condition"
                    checked={checked}
                    onChange={handleChangeTermsConditions}
                  />
                }
                label="Acepto Términos y Condiciones *"
              />
            </div>
            <p></p>
            <Button
              data-testid="register-button"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!checked || gender=="" || rolPosition == "" || name == ""}
              style={{
                marginTop: "16px",
                marginBottom: "24px",
                marginLeft: "0px",
                marginRight: "16px",
              }}
            >
              REGISTRAR
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
              href="/"
            >
              CANCELAR
            </Button>
        </div>
      </Grid>
    </Grid>
  );
}
