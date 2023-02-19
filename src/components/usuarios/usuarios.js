import './usuarios.css'
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Usuarios=()=>{
    return(
        <div className='caja' >
            <Grid container className="cabeza">
            <h1 className="titulo">Usuarios</h1>
            </Grid>

            <Grid container className='papa'>
                <TableContainer component={Paper} className='tabla' >
                    <Table  aria-label="simple table" className='ta'>
                        <TableHead sx={{backgroundColor:'black'}}>
                        <TableRow >
                            <TableCell sx={{color:'white'}} > <strong>id</strong>  </TableCell>
                            <TableCell align="right" sx={{color:'beige'}}> <strong>nombre</strong> </TableCell>
                            <TableCell align="right" sx={{color:'beige'}}> <strong>apellido</strong> </TableCell>
                            <TableCell align="right" sx={{color:'beige'}}> <strong>edad</strong> </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">1</TableCell>
                                <TableCell align="right">pedro</TableCell>
                                <TableCell align="right">hernandez</TableCell>
                                <TableCell align="right">23</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">2</TableCell>
                                <TableCell align="right">sebastian</TableCell>
                                <TableCell align="right">perez</TableCell>
                                <TableCell align="right">19</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">3</TableCell>
                                <TableCell align="right">harold</TableCell>
                                <TableCell align="right">gomez</TableCell>
                                <TableCell align="right">20</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">4</TableCell>
                                <TableCell align="right">andres</TableCell>
                                <TableCell align="right">turizo</TableCell>
                                <TableCell align="right">22</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">5</TableCell>
                                <TableCell align="right">carlos</TableCell>
                                <TableCell align="right">prado</TableCell>
                                <TableCell align="right">21</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid container className="footer">
                <Link to='/administracion'>
                    <button>administracion</button>
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

export default Usuarios