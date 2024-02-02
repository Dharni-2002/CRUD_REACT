import React from "react";
import style from "./Home.module.css"
import {Link} from "react-router-dom"
const Home=()=>{
    return(
       <section id={style.homePage}>
            <Link to={"/"}>Create-User</Link>
            <Link to={"/users"}>Users</Link>
       </section>
    )
}
export default React.memo(Home)