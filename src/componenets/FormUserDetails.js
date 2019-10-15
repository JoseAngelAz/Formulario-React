import React, { Component } from 'react'
import MuiThemeProvider from
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Styleboton from '../stylesJS/Styleboton';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Introducir Datos del Usuario"/>
                    <TextField
                     hintText="Introduce tu Primer Nombre"
                     floatingLabelText="Primer Nombre"
                     onChange={handleChange('fistName')}
                     defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                     hintText="Introduce tu Apellido"
                     floatingLabelText="Primer Apellido"
                     onChange={handleChange('lastName')}
                     defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                     hintText="Introduce tu Email"
                     floatingLabelText="Email"
                     onChange={handleChange('email')}
                     defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                     label="Continuar"
                     primary={true}
                     style={StyleSheet.Styleboton}
                     onClick={this.continue}
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
