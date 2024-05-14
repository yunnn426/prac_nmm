import React, { useState } from "react";

function LoginButton({  onClick }) {
    // const handleLoginClick = () => {
    //     console.log(`ID: ${id}, Password: ${password}`);
    //   };

    return (
        <button onClick={ onClick }>LOGIN</button>
    )
}

export default LoginButton;