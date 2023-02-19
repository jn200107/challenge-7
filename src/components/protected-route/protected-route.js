import { Navigate,Outlet, redirect } from "react-router-dom";


export const ProtectedRoute=({
    isAllowed,
    redirecTo='/acceso-restringido',
    Children
})=>{
    if(!isAllowed){ 
        return <Navigate to={redirecTo}/>
    } 
    return Children ? Children : <Outlet/>
}