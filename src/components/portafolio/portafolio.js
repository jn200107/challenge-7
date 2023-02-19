import './portafolio.css'
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';



const Portafolio=()=>{
    return(
        <div className='caja' >
            <Grid container className="cabeza">
                <h1 className="titulo">Hola soy desarrollador</h1>
            </Grid>

            <Grid container className='padre' >
                <Grid item sx={{marginTop:5,display:'flex',alignItems:'center',marginBottom:20,pr:20}}>
                    <Avatar alt="Remy Sharp"src="/static/images/avatar/1.jpg"sx={{ width: 90, height: 90,ml:5,mr:5 }}/>
                    <div > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                </Grid>
            </Grid>

            
            <Grid item sx={{textAlign:'center',fontSize:30}}>
                <p>conoce mis proyectos</p>
            </Grid>

            <Grid className='padre2' sx={{mt:2,mb:25}}>
                <Grid item className='card' sx={{mr:1}}>
                    <h3 class="card__title">C.R.U.D </h3>
                    <p class="card__content"> pagina de lectura,creacion,actualizacion y eliminacion de productos hecho con React </p>
                    <div class="card__arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"><path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path></svg></div>
                </Grid>
                <Grid item className='card' sx={{mr:1}}>
                    <h3 class="card__title">pagina de loguin </h3>
                    <p class="card__content">pagina de logueo funcional con rutas protejidas hecha con react y usando react-router-dom </p>
                    <div class="card__arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"><path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path></svg></div>
                </Grid>
                <Grid item className='card' sx={{mr:1}}>
                    <h3 class="card__title">agustin de la sierra</h3>
                    <p class="card__content">pagina estatica hecha con html y css</p>
                    <div class="card__arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"><path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path></svg></div>
                </Grid>
            </Grid>

            
            <Grid container className='padre3' sx={{height:1000,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',mb:20}}>
                <Grid item>
                    <h2>conocimientos</h2>
                </Grid>
                <Grid item>
                <p>trabajo de la mano con las siguientes tecnologias, de igual manera cada dia aprendiendo a utilizarlas con mayor eficiencia</p>
                </Grid>
                <Grid item >
                    <p>HTML | CSS | JAVASCRIPT | REACT | NODE.JS | MYSQL</p>
                </Grid>
            </Grid>

            <Grid container className="footer" sx={{marginTop:0}}>
                <Link to='/administracion'>
                    <button>administracion</button>
                </Link>
                <Link to='/informacion-general'>
                    <button>informacion general</button>
                </Link>
                <Link to='/usuarios'>
                    <button>usuarios</button>
                </Link>
            </Grid>
        </div>
    )
}

export default Portafolio