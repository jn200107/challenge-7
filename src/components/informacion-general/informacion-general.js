import './informacion-general.css'
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'

const Informacion=()=>{
    return(
        <div className='caja' >
            <Grid container className="cabeza">
                <h1 className="titulo">informacion general</h1>
            </Grid>
            <Grid container sx={{height:1000,alignItems:'center',textAlign:'center',pl:65}}>
                <p>pagina de informacion general </p>
            </Grid>

            <Grid container className="footer">
                <Link to='/administracion'>
                    <button>administracion</button>
                </Link>
                <Link to='/portafolio'>
                    <button>portafolio</button>
                </Link>
                <Link to='/usuarios'>
                    <button>usuarios</button>
                </Link>
            </Grid>
        </div>
        
    )
}

export default Informacion