import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const NavbarCustom = () => {
    return (
        <React.Fragment>
            <ProgressBar style={{ fontSize: 18 }}>
                <ProgressBar striped variant="success" now={35} key={1} label="Product Selected" >  </ProgressBar>
                <ProgressBar variant="warning" now={30} key={2} label="Appointment" >  </ProgressBar>
                <ProgressBar striped variant="secondary" now={35} key={3} label="Checkout" />
            </ProgressBar> <br></br>
        </React.Fragment>
    )
}

export default NavbarCustom;