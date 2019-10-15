import React, { Component } from 'react'
import MuiThemeProvider from
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Styleboton from '../stylesJS/Styleboton';


export class Succes extends Component {    
    render() {       
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Terminado"/>
                    <h1>Gracias por tu registro</h1>
                    <p>Recibirás un email con las siguentes
                        instrucciones.
                    </p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}


export default Succes;
