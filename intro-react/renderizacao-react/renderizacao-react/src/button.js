import React from 'react'

function Button(promps) {

    const {name, onClick } = promps

    return(
        <button onClick ={onClick}>{name}</button>
    )
}

export default Button