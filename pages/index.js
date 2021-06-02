import styles from '../styles/Home.module.css'
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div className={styles.container} style ={{
      background: "#EAF2E3"
    }}>
      <img src="https://i.ibb.co/4YJ7NQD/52696.jpg" alt="52696" border="0" data-testid = "banner" style={{
            marginTop: "64px",
            marginLeft: "32px",
            display: "flex",
            flexDirection: "column",
            width: "1600px",
            alignItems: "center",
            borderRadius: "80px",
          }}/>
        
      <Button
              fullWidth
              data-testid = "register"
              style={{
                marginTop: "60px",
                marginLeft: "0px",
                marginRight: "16px",
                fontFamily: "Segoe UI",
                textTransform: "capitalize",
                fontSize: "25px",
                width:"900px",
                height: "50px",
                borderRadius: "20px",
                background: "#66D7D1"
              }}
              href="/employee/register"
            >
              Registrar Un Empleado
            </Button>

            <Button
              fullWidth
              data-testid = "listemployees"
              style={{
                marginTop: "15px",
                marginLeft: "0px",
                marginRight: "16px",
                fontSize: "25px",
                fontFamily: "Segoe UI",
                textTransform: "capitalize",
                width:"900px",
                height: "50px",
                borderRadius: "20px",
                background: "#66D7D1"                
              }}
              href="/employee/list"
            >
              Ver Lista De Empleados
            </Button>
        <footer className={styles.footer} style={{marginTop:"180px"}}>
        <h5 style={{marginTop:"-20px"}}>Powered by The Dream Team! Original desing by Jesid And Alejo. All right reserved for not comercial software.</h5>
        
      </footer>

      
    </div>
  )
}
