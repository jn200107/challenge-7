import './administracion.css'
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'

const Administracion=()=>{
    return(
        <div className='caja' >
            <Grid container className="cabeza">
            <h1 className="titulo">Administracion</h1>
            </Grid>
            <Grid container sx={{height:1000,alignItems:'center',textAlign:'center',pl:65}}>
                <p>pagina de informacion general </p>
            </Grid>
            <Grid container className="footer">
            <Link to='/usuarios'>
                <button>usuarios</button>
            </Link>
            <Link to='/informacion-general'>
                <button>informacion general</button>
            </Link>
            <Link to='/portafolio'>
                <button>portafolio</button>
            </Link>
            

            </Grid>
        </div>
    )
}

export default Administracion