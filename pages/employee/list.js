import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Button from "@material-ui/core/Button";
import { EmployeeCard } from '../../components/employee-card';
import { employeeController } from '../../controllers';
import useSWR from 'swr';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

export default function ListEmployees({ employees }) {
    const classes = useStyles();
    const { data } = useSWR('/employee', employeeController.list)
    employees = data?.data;
    /**employees = [{"name": "nuevo pruevita", "position" : "Administrativo", "gender": "Male", "hasCourses": true, "courses": ["Inducción", "Normativa"]}, {"name": "nuevo pruevita", "position" : "Administrativo", "gender": "Female", "hasCourses": true, "courses": ["Inducción", "Normativa", "Seguridad", "Valores institucionales", "Terminología"]}, {"name": "nuevo pruevita", "position" : "Administrativo", "gender": "Male", "hasCourses": true, "courses": ["Inducción", "Normativa"]}
                ,{"name": "nuevo pruevita", "position" : "Administrativo", "gender": "Male", "hasCourses": true, "courses": ["Inducción", "Normativa"]}];*/
   
    return (
        <div>
            <Button
              data-testid="register-button"
              type="cancel"
              fullWidth
              variant="contained"
              color="primary"
              style={{
                marginTop: "16px",
                marginBottom: "24px",
                marginLeft: "16px",
                marginRight: "16px",
                width: "100px",
                height: "30px"
              }}
              href="/"
            >
              REGRESAR
            </Button>
            <Grid container justify="center" spacing={2} style={{marginTop : "30px"}}>
                <Grid item xs={6}>
                
                    <Grid container justify="center" alignItems="stretch">
                        
                        {employees!= undefined && employees.length!=0 ? employees.map(employee => (
                            <Grid key={employee} item xs={4} style={{marginTop : "20px"}}>
                                <EmployeeCard
                                    name={employee.name}
                                    position={employee.rolPosition}
                                    gender={employee.gender}
                                    hascourses={employee.hasCourses.toString()}
                                    courses={employee.courses}
                                />
                            </Grid>
                        )): "No hay empleados para mostrar."}   
                    </Grid>
                    
                </Grid>
            </Grid>
        </div >
    );
}
