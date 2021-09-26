import React from 'react'

export const Footer = () => {
    let footerStyle ={
        position: "relative",
        top: "30vh"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodos List
            </p>
        </footer>
    )
}
