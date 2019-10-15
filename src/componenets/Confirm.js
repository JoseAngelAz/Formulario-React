import React, { Component } from 'react'
import MuiThemeProvider from
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Styleboton from '../stylesJS/Styleboton';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM//
        this.props.nextStep();
    }

    //regresar al paso anterior
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values:{firstName, lastName,email,
             occupation,city, bio}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirmar Datos del Usuario"/>
                    <List>
                        <ListItem 
                        primaryText="Primer Nombre"
                        secondaryText={firstName}
                        />
                        <ListItem 
                        primaryText="Primer Apellido"
                        secondaryText={lastName}
                        />
                        <ListItem 
                        primaryText="Email"
                        secondaryText={email}
                        />
                        <ListItem 
                        primaryText="Ocupasión"
                        secondaryText={occupation}
                        />
                        <ListItem 
                        primaryText="Ciudad"
                        secondaryText={city}
                        />
                        <ListItem 
                        primaryText="Bio"
                        secondaryText={bio}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                     label="Confirmar y Continuar"
                     primary={true}
                     style={StyleSheet.Styleboton}
                     onClick={this.continue}
                    />
                    <br/>
                    <RaisedButton
                     label="Regresar"
                     primary={false}
                     style={StyleSheet.Styleboton}
                     onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const booton ={
    buttom:{
        margin:15
    }
}

export default FormUserDetails;
