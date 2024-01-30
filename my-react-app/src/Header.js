import React from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'; 

function Header() {
    const jumbotronStyle = {
        backgroundImage: 'my-react-app/assets/images/jumbotron.png', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white', 
        }; 
    return (
        <div style={jumbotronStyle}> 
            <Container> 
                <h1> Welcome to my Website!</h1>
                <p>??? </p>
            </Container>
        </div>
    )
}

export default Header; 
