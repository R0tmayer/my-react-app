import CartView from "./views/CartView.tsx";
import './styles/index.css'
import * as React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

function Container({children}: ContainerProps){
    return(
        <div className="container">
            {children}
        </div>
    )
}

export default function App(){
    return (
        <Container>
            <CartView/>
        </Container>
    )
}