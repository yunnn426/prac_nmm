import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
        <h1> Home Page </h1>
        <hr/>
        <Link to="/login">to login</Link>
        </>
    )
}

export default Home;