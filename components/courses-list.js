import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const CoursesList = ({ courses }) => {
  const classes = useStyles();

  return (
  
  <List className={classes.root} name="courses-list-employee">
    <Typography gutterBottom variant="h6" component="h2" name="position-employee"><strong>Cursos:</strong></Typography>
    {courses ? courses.map(course =>
      <ListItem key={course}>
        <ListItemAvatar>
          <Avatar style={{width: "15px", height: "15px"}}>
            <FontAwesomeIcon icon={faCheckCircle} style={{width: "15px", height: "15px"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={course} style={{width: "15px", height: "30px"}}/>
      </ListItem>
    ): "No tiene cursos"}
  </List>)
}
